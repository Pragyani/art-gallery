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
            { id: "Mandala", label: "Mandala", img: SideBarImage1 },
            { id: "Sketeches", label: "Sketeches", img: SideBarImage2 },
            { id: "Quilling", label: "Quilling", img: SideBarImage3 },
            { id: "Painting", label: "Painting", img: SideBarImage4 },
        ]
    },
    {
        id: "artist", label: "Artist", options: [
            { id: "Pragya", label: "Pragya", img: SideBarImage1 },
            { id: "Pragyani", label: "Pragyani", img: SideBarImage2 },
            { id: "Anirudh", label: "Anirudh", img: SideBarImage3 },
        ]
    },
    {
        id: "material",
        label: "Material",
        options: [
            { id: "oilPaint", label: "Oil Paint", img: SideBarImage1 },
            { id: "watercolor", label: "Watercolor", img: SideBarImage1 },
            { id: "acrylicPaint", label: "Acrylic Paint", img: SideBarImage1 },
            { id: "sculpture", label: "Sculpture", img: SideBarImage1 },
            { id: "photography", label: "Photography", img: SideBarImage1 },
            { id: "printmaking", label: "Printmaking", img: SideBarImage1 },
            { id: "mixedMedia", label: "Mixed Media", img: SideBarImage1 }
        ]
    },
    {
        id: "timePeriod",
        label: "Time Period",
        options: [
            { id: "19thCentury", label: "19th Century", img: SideBarImage1 },
            { id: "20thCentury", label: "20th Century", img: SideBarImage1 },
            { id: "21stCentury", label: "21st Century", img: SideBarImage1 },
            { id: "medievalArt", label: "Medieval Art", img: SideBarImage1 },
            { id: "ancientArt", label: "Ancient Art", img: SideBarImage1 }
        ]
    },
    {
        id: "priceRange",
        label: "Price Range (INR)",
        options: [
            { id: "under500", label: "Under ₹40,000", img: SideBarImage1 },
            { id: "500to2000", label: "₹40,000 - ₹1,60,000", img: SideBarImage1 },
            { id: "2000to5000", label: "₹1,60,000 - ₹4,00,000", img: SideBarImage1 },
            { id: "over5000", label: "Over ₹4,00,000", img: SideBarImage1 }
        ]
    },
    {
        id: "sizeDimensions",
        label: "Size",
        options: [
            { id: "small", label: "Small", img: SideBarImage1 },
            { id: "medium", label: "Medium", img: SideBarImage1 },
            { id: "large", label: "Large", img: SideBarImage1 },
            { id: "customSize", label: "Custom Size", img: SideBarImage1 }
        ]
    },
    {
        id: "artistNationality",
        label: "Artist Nationality",
        options: [
            { id: "indian", label: "Indian", img: SideBarImage1 },
            { id: "american", label: "American", img: SideBarImage1 },
            { id: "european", label: "European", img: SideBarImage1 },
            { id: "asian", label: "Asian", img: SideBarImage1 },
            { id: "african", label: "African", img: SideBarImage1 }
        ]
    }
];