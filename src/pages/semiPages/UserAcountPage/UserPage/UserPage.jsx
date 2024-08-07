import React, { useState } from "react";
import './userpage.css';
import { Button } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FilterIcon from '@mui/icons-material/Filter';
import Rating from '@mui/material/Rating';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';


const ProfilePage = ({ data }) => {
  //  console.log('profile', data)

    const [prevDummyData, setPrevDummyData] = useState(data);
    const [showInput, setShowInput] = useState(false);
    const [inputName, setInputName] = useState('');
    const [inputPrice, setInputPrice] = useState('');
    const [inputStatus, setInputStatus] = useState('');
    const [inputBrand, setInputBrand] = useState('');
    const [inputImage, setInputImage] = useState(null);
    const [inputImageUrl, setInputImageUrl] = useState('');

    const handleItemClick = () => {
        setShowInput(!showInput);
    };

    const handleChangeName = (e) => {
        setInputName(e.target.value)
    }

    const handleChangeImage = (e) => {
        const file = e.target.files[0];
        setInputImage(file);
        setInputImageUrl(URL.createObjectURL(file));
    }

    const handleChangePrice = (e) => {
        setInputPrice(e.target.value);
    }

    const handleChangeStatus = (e) => {
        setInputStatus(e.target.value);
    }

    const handleChangeBrand = (e) => {
        setInputBrand(e.target.value);
    }

    const handleItemSubmit = (e) => {
        e.preventDefault();

        const newData = {
            name: inputName,
            price: inputPrice,
            status: inputStatus,
            brand: inputBrand,
            image: inputImageUrl,
        }

        setPrevDummyData((prevArray) => [...prevArray, newData]);
        setInputName('');
        setInputPrice('');
        setInputStatus('');
        setInputBrand('');
        setInputImage(null);
        setInputImageUrl('');
    }

    const removePost = (targetIndex) => {
        const newArray = prevDummyData.filter((item, index) => index !== targetIndex);
        setPrevDummyData(newArray);
    };

    return (
        <>
            <div className="profile-prt">
                <div className="profile-content">
                    <section className="user-profile">
                        <div className="text-file">
                            <div className="user-pImg">
                                <img src="https://i.pinimg.com/564x/25/ee/de/25eedef494e9b4ce02b14990c9b5db2d.jpg" />
                            </div>
                        </div>

                        <div className="mega-userProfile">
                            <div className="cl-rowUser">

                                <ul className="cl-ul">
                                    <li onClick={handleItemClick}> ADD <KeyboardArrowDownIcon /></li>
                                </ul>
                                <hr />

                                {showInput && (
                                    <div className="input-container">

                                        <div className="input-box">
                                            <h3>create new post</h3><hr className="h3-hr" />
                                            <div className="flex-item">
                                                <div className="img-area">
                                                    <div className="image-field">
                                                        <FilterIcon className="select-item" />

                                                        <form >
                                                            <label for="myfile">Drag phots and videos here</label>
                                                            <input type="file" onChange={handleChangeImage} />
                                                            {inputImageUrl && <img src={inputImageUrl} alt="Preview" className="preview-image" />}

                                                        </form>

                                                    </div>
                                                </div>
                                                <hr className="horizontl-line" />

                                                <form className="local-input" onSubmit={handleItemSubmit}>
                                                    <div className="cl-local">
                                                        <div className="user-pic">
                                                            <img src="https://i.pinimg.com/564x/25/ee/de/25eedef494e9b4ce02b14990c9b5db2d.jpg" alt="image" />

                                                            <h4><input type="text" placeholder="Your Name" value={inputName} onChange={handleChangeName} /></h4>
                                                        </div>

                                                        <div className="post-brief">
                                                            <div className="price-bref">
                                                                <h5 className="price-tg-txt">Add the price of drawing </h5>
                                                                <input type="number" placeholder="enter price..." value={inputPrice} onChange={handleChangePrice} />
                                                            </div>

                                                            <div className="stock-bar">
                                                                <h5>Stock Staus</h5>
                                                                <input type="text" placeholder="enter the status..." value={inputStatus} onChange={handleChangeStatus} />
                                                            </div>

                                                            <div className="brand-bar">
                                                                <h5>BRAND NAME</h5>
                                                                <input type="text" placeholder="enter your brand name..." value={inputBrand} onChange={handleChangeBrand} />
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <Button type="submit">share</Button>
                                                </form>

                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div className="re-contaier">
                                    {
                                        prevDummyData.map((item, index) => {
                                            return (

                                                <div className="product-fl" key={index}>
                                                    <div className="products-w">
                                                        <div className="product-box">
                                                            <div className="product-img">
                                                                <img src={item.image} alt="mS" />
                                                            </div>
                                                        </div>

                                                        <div className="product-breif">
                                                            <div className="info-prod">
                                                                <div className="info-data">
                                                                    <h4>Desgined By Pragya</h4>
                                                                    <h5 className="name">{item.name}</h5>
                                                                    <h5 className="price-tag">Price - <span>{item?.price}</span></h5>
                                                                    <h5>Rating -<Rating name="customized-10" defaultValue={item?.rating} max={5} className="rating-crd" /></h5>
                                                                    <p>StockStatus - <h6>{item?.stockStatus}</h6> </p>
                                                                    <h4>Brand Name - <b>{item?.brand}</b></h4>
                                                                    <span className="product-chnges-icon" onClick={() => removePost(index)}><DeleteForeverRoundedIcon className="dots-icon" /></span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}
export default ProfilePage;