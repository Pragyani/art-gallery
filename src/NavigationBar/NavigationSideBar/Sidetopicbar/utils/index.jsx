/**
 * External dependencies
 */
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Button from "@mui/material/Button";
import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

/**
 * Internal dependencies
 */
import { SideBarImage1, SideBarImage2, SideBarImage3, SideBarImage4 } from "../../../../utils";

export const menuItems = (activeItem = '') => [
    {
        id: "home",
        link: "/",
        label: "Home",
        icon: activeItem === "home" ? <HomeIcon /> : <HomeOutlinedIcon />,
    },
    {
        id: "likedPost",
        link: "/popular-page",
        label: "Liked Post",
        icon: activeItem === "likedPost" ? <FavoriteIcon /> : <FavoriteBorderIcon />,
    },
    {
        id: "savedPost",
        link: "/saved-post",
        label: "Saved Post",
        icon: activeItem === "savedPost" ? <TurnedInIcon /> : <TurnedInNotIcon />,
    },
    {
        id: "createAccount",
        link: "/your-account",
        label: "Create Account",
        icon: activeItem === "createAccount" ? <PersonAddIcon /> : <PersonOutlineOutlinedIcon />,
    },
    {
        id: "cart",
        link: "/add-to-cart",
        label: (
            <>
                {" "}
                Your Cart
                <Button variant="text">
                    {/* {cartItems.length} */}
                </Button>
            </>
        ),
        icon: activeItem === "cart" ? <ShoppingCartIcon /> : <ShoppingCartOutlinedIcon />,
    },
];


export const dropdownSections = [
    {
        id: "artTypes", label: "Types", options: [
            { id: "Doodle Art", label: "Doodle Art", img: SideBarImage1 },
            { id: "Sketech", label: "Sketech", img: SideBarImage2 },
            { id: "Mandala Art", label: "Mandala Art", img: SideBarImage3 },
        ]
    },
    {
        id: "artist", label: "Artist", options: [
            { id: "artGallery", label: "artGallery", img: SideBarImage1 },
            { id: "PragyAni", label: "PragyAni", img: SideBarImage2 },
            { id: "aniPragya", label: "aniPragya", img: SideBarImage3 },
            { id: "Pragya", label: "Pragya", img: SideBarImage3 },
            { id: "shinoyee_pragya", label: "shinoyee_pragya", img: SideBarImage3 },
            { id: "Pragya Pandey", label: "Pragya Pandey", img: SideBarImage3 },
        ]
    },
    {
        id: "timePeriod",
        label: "Time Period",
        options: [
            { id: "LatestDesign", label: "Latest Design", img: SideBarImage1 },
            { id: "1DayAgo", label: "1 Day ago", img: SideBarImage1 },
            { id: "3DayAgo", label: "3 Day ago", img: SideBarImage1 },
            { id: "1weeksago", label: "1 Weeks Ago", img: SideBarImage1 },
            { id: "3weeksago", label: "3 Weeks Ago", img: SideBarImage1 },
            { id: "1months", label: "1 months Ago", img: SideBarImage1 },
            { id: "3months", label: "3 months Ago", img: SideBarImage1 },
        ]
    },
    {
        id: "material",
        label: "Material",
        options: [
            { id: "Mandala Art", label: "Mandala Art", img: SideBarImage3 },
            { id: "Doodle Art", label: "Doodle Art", img: SideBarImage1 },
            { id: "Sketech", label: "Sketech", img: SideBarImage2 },
            { id: "Mandala Art", label: "Mandala Art", img: SideBarImage3 },
        ]
    },
];