import { Card } from "./Card"

export function NowPlaying() {
  return (
    <Card className="flex flex-col items-center justify-center gap-2 p-4 text-center">
      <svg className="h-5 w-5" viewBox="0 0 168 168" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M83.996 0.277C37.747 0.277 0.253 37.77 0.253 84.019C0.253 130.27 37.747 167.76 83.996 167.76C130.25 167.76 167.74 130.27 167.74 84.019C167.74 37.773 130.25 0.281 83.995 0.281L83.996 0.277ZM122.4 121.057C120.9 123.517 117.68 124.297 115.22 122.787C95.558 110.777 70.806 108.057 41.656 114.717C38.847 115.357 36.047 113.597 35.407 110.787C34.764 107.977 36.517 105.177 39.333 104.537C71.233 97.249 98.596 100.387 120.67 113.877C123.13 115.387 123.91 118.597 122.4 121.057ZM132.65 98.255C130.76 101.327 126.74 102.297 123.67 100.407C101.16 86.571 66.847 82.564 40.222 90.646C36.769 91.689 33.122 89.743 32.074 86.296C31.034 82.843 32.981 79.203 36.428 78.153C66.841 68.925 104.65 73.395 130.5 89.275C133.57 91.169 134.54 95.183 132.65 98.255ZM133.53 74.511C106.54 58.48 62.01 57.006 36.241 64.827C32.103 66.082 27.727 63.746 26.473 59.608C25.219 55.468 27.553 51.095 31.694 49.837C61.275 40.857 110.45 42.592 141.524 61.039C145.254 63.248 146.474 68.055 144.264 71.772C142.064 75.494 137.244 76.721 133.534 74.511H133.53Z"
          fill="currentColor"
        />
      </svg>
      <div className="flex flex-col gap-1">
        <p className="text-xs text-neutral-500 dark:text-neutral-400">Not playing</p>
        <p className="font-medium">Spotify</p>
      </div>
    </Card>
  )
}

// Export SpotifyPlayer as well to maintain compatibility with existing imports
export function SpotifyPlayer({ className }) {
  return (
    <div className={`rounded-2xl box-gen flex p-4 ${className || ""}`}>
      <div className="flex items-center justify-between w-full max-w-full space-x-4">
        <div className="relative">
          <div className="absolute top-0 bottom-0 left-0 right-0 z-20 w-8 h-8 m-auto bg-transparent border rounded-full border-white/20 dark:border-white/10 outline outline-1 outline-offset-4 dark:outline-white/10 outline-white/20"></div>
          <div className="absolute top-0 bottom-0 left-0 right-0 z-20 w-1 h-1 m-auto bg-white rounded-full dark:bg-neutral-900"></div>
          <img
            width="64"
            height="64"
            alt="Album cover"
            src="https://cdn-images.dzcdn.net/images/cover/07d837e8865ce86684a86fb79ccece96/0x1900-000000-80-0-0.jpg"
            className="absolute top-0 bottom-0 left-0 right-0 z-10 object-cover w-14 h-14 m-auto rounded-full aspect-square"
          />
          <div className="bg-black border border-white rounded-full shadow-md h-14 w-14 dark:border-white/10 ring-1 ring-white/10 outline outline-1 outline-offset-0 outline-zinc-200 dark:outline-[#1a1a1a]"></div>
        </div>
        <div className="inline-flex flex-col w-full max-w-full">
          <a
            href="https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b"
            className="font-semibold capsize max-w-max body-primary line-clamp-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Timeless (feat. Playboi Carti)
          </a>
          <p className="capsize max-w-max body-secondary line-clamp-1">The Weeknd</p>
        </div>
        <a
          className="px-2 boxgen"
          href="https://open.spotify.com/track/1Es7AUAhQvapIcoh3qMKDL"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-play-circle"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <polygon points="10 8 16 12 10 16 10 8"></polygon>
          </svg>
        </a>
      </div>
    </div>
  )
}

export default NowPlaying
