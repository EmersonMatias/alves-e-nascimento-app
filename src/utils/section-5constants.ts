import Whatsapp from "../assets/img/Whatsapp.webp"
import Gmail from "../assets/img/Gmail.webp"
import Instagram from "../assets/img/Instagram.webp"
import { sendToGmail, sendToInstagram } from "./send-to-social"

export const Section5Contents = [
    {
        img: Whatsapp,
        name: "Whatsapp"
    },
    {
        img: Gmail,
        name: "Gmail",
        link: sendToGmail
    },
    {
        img: Instagram,
        name: "Instagram",
        link: sendToInstagram
    }
]