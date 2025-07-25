export function getCustomBanner({ deposit }: { deposit: number }) {
  switch (deposit) {
    case 50:
      return {
        graphics: [""],
      };
  }
}
