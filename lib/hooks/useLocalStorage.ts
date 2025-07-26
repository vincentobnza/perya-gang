'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';

export function storeUserData(_user: any) {
    const jsonString = JSON.stringify(_user);
    const encoded = window.btoa("peryagang-" + window.btoa(unescape(encodeURIComponent(jsonString))));
    localStorage.setItem("_peryaaccount", encoded);
}

export function getUserData() {
  if (typeof window === 'undefined') return null;

  const encoded = localStorage.getItem("_peryaaccount");
  if (encoded) {
    try {
      const outerDecoded = window.atob(encoded);
      const innerEncoded = outerDecoded.replace("peryagang-", "");
      const jsonString = decodeURIComponent(escape(window.atob(innerEncoded)));
      return JSON.parse(jsonString);
    } catch (e) {
      return null;
    }
  }
  return null;
}

export function getToken() {
    const user = getUserData();
    if (user && user.token) {
        axios.defaults.headers.common["X-Session-Token"] = user.token;
    }
}