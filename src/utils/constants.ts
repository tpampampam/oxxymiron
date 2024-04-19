import { Menu, Socials } from "../modules/module";


// export const MAIN_URL = `https://graphql.contentful.com/content/v1/spaces/${import.meta.env.VITE_SPACE_ID}`
export const MAIN_URL = `http://localhost:8000/`
export const ASSET_URL= (id: string) => `${id}`

export const MENU: Menu = [
    {
        name: "Концерты",
        link: 'tour'
    },
    {
        name: "Творчество",
        link: 'tracks'
    },
    {
        name: "Новости",
        link: 'news'
    },
    {
        name: "OXXXYShop",
        link: 'shop'
    }
]

export const SOCIALS: Socials = [
    {
      icon: "youtube",
      link: "https://www.youtube.com/channel/UCCzp3DWpSc0s5wXYDghjM9A",
    },
    {
      icon: "twitter",
      link: "https://twitter.com/norimyxxxo",
    },
    {
      icon: "applemusic",
      link: "https://music.apple.com/pl/artist/oxxxymiron/301601116",
    },
    {
      icon: "tiktok",
      link: "https://www.tiktok.com/@oxxxymiron",
    },
    {
      icon: "instagram",
      link: "https://www.instagram.com/norimyxxxo",
    },
    {
      icon: "spotify",
      link: "https://open.spotify.com/artist/1gCOYbJNUa1LBVO5rlx0jB",
    },
  ];




export const SLIDER_BUTTON_TYPES = {
  NEXT: 'NEXT',
  PREV: 'PREV'
}



