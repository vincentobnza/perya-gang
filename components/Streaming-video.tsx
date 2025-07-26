"use client";

import { RaffleScrollModal } from "@/app/(user)/components/RaffleScrollModal";
import React from "react";
import Image from "next/image";
import { useMobile } from "@/hooks/useMobile";
import LiveComments from "@/app/(user)/components/LiveComments";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { 
  StartLive,
  StopLive
} from "@/app/api/streamer/stream_setup";

import videojs from "video.js";
import "video.js/dist/video-js.css";

import { useState, useEffect, useRef } from "react";


export default function StreamingVideo({ streamInfo}: any) {
const isMobile = useMobile();
const isTablet = useMobile(820);

const stream_source = process.env.NEXT_PUBLIC_SOURCE_URL;
const stream_url = process.env.NEXT_PUBLIC_LIVE_URL;


const videoRef = useRef<HTMLVideoElement | null>(null);
const playerRef = useRef<any>(null);


const isPreview = !!streamInfo?.isPreview;

useEffect(() => {
    if (videoRef.current && streamInfo?.username) {
      if (playerRef.current) {
        playerRef.current.dispose();
      }

      const videoElement = videoRef.current;
      
      console.log('Stream URL:', `${stream_source}/${streamInfo.username}.m3u8`); // Debug URL

      playerRef.current = videojs(videoElement, {
        autoplay: true,
        controls: true,
        preload: 'auto',
        responsive: true,
        fluid: true,
        width: '100%',
        height: '100%',
        sources: [{
          src: `${stream_source}/${streamInfo.username}.m3u8`,
          type: 'application/x-mpegURL'
        }]
      }, function onPlayerReady() {
        console.log('Player Ready', this);
        
        // Handle errors
        this.on('error', () => {
          console.log('Video.js Error:', this.error());
        });
      });
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, [stream_source, streamInfo?.username]);

 

  return (
    <div className="mt-5 md:mt-6 lg:mt-8 mb-12 w-full bg-zinc-900/20 relative">
      <RaffleScrollModal />
      <div className="flex justify-center items-center w-full">
        <div className="mt-5 max-w-screen-xl aspect-video relative rounded-2xl w-full flex justify-center items-center">
          {/* Frame Image */}
          <Image
            src="/streaming-frame.png"
            alt="Streaming Frame"
            width={isMobile ? 240 : isTablet ? 900 : 775}
            height={isMobile ? 240 : isTablet ? 900 : 775}
            className="absolute z-20 mx-auto pointer-events-none"
          />

          {/* Video Player */}
          <div className="w-full h-full absolute inset-0 z-10">
            <video
              ref={videoRef}
              className="video-js vjs-theme-city w-full h-full"
              data-vjs-player
              controls
              preload="auto"
              playsInline
              webkit-playsinline
            />
          </div>
        </div>
      </div>
      <LiveComments />
    </div>
  );
}
