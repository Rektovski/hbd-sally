import "./HBDStyle.css";
import image from "./291782113_5164942763623287_9019968788098319693_n.jpg";
import {useEffect, useState} from "react";
import {LazyLoadImage} from "react-lazy-load-image-component";

let intervalId;

export default function Happy() {
    const [countDown, setCountDown] = useState(10);

    useEffect(() => {
        if (countDown > 1) {
            clearInterval(intervalId);
            intervalId = setInterval(() => {
                setCountDown((prevState) => prevState - 1)
            }, 1000)
        } else {
            clearInterval(intervalId);
            window.location.reload();
        }
        console.log('ErrorPage.js')
    }, [countDown]);

    return (
        <div className={'huston text-center'}>
            <div className={'imageContainer'}>
                <LazyLoadImage
                    className={'errorPageBackground'}
                    src={image}
                    alt="iubilari"
                />
            </div>
            <div className={'errorMessage'}>
                <div className={'css-typing'}>
                    <p>
                        HUSTON!! We got a problem...
                    </p>
                    <p>
                        Just kidding B)
                    </p>
                    <p>
                        Happy birthday :'/
                    </p>
                </div>
            </div>
        </div>
    );
}