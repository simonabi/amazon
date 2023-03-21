import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <div className='container__scroll'>
                <img
                    className="home__image"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/img18/home/2022/Q3/Onsite/StoreFronts/2022Q3_HCT_Storefront_Hero_ModernSitting_D_1500x500_EN.jpg"
                        alt="" />
                    
                    <img
                        src="https://images-na.ssl-images-amazon.com/images/G/01/img18/home/2022/Q3/Onsite/StoreFronts/2022Q3_HCT_Storefront_Hero_WarmNeutralsLivingRoom_D_1500x500_EN.jpg"
                        alt="" />
                    
                    <img
                        src="https://images-na.ssl-images-amazon.com/images/G/01/img18/home/2022/Q3/Onsite/StoreFronts/2022Q3_HCT_Storefront_Hero_PerfectlyImperfect_D_1500x500_EN.jpg"
                        alt="" />
                    
                </div>
                <div className="home__row">
                    <Product
                        id="12321341"
                        title="IT’S A Skin Wheel Decals Compatible with Amazon Astro - Printed Metal (Copper, Gold, Silver)"
                        price={25.95}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/512XK4ypKjL._AC_UF226,226_FMjpg_.jpg" />

                    <Product
                        id="4903850"
                        title="Soundcore Anker Life Q20 Hybrid Active Noise Cancelling Headphones, Wireless Over Ear Bluetooth Headphones, 40H Playtime, Hi-Res Audio, Deep Bass, Memory Foam Ear Cups, for Travel, Home Office"
                        price={59.99}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/41V7Ow0vDGL._AC_UF226,226_FMjpg_.jpg" />
                    <Product
                        id="4903850"
                        title="Apple 2023 MacBook Pro Laptop M2 Max chip with 12‑core CPU and 30‑core GPU: 14.2-inch Liquid Retina XDR Display, 32GB Unified Memory, 1TB SSD Storage. Works with iPhone/iPad; Space Gray"
                        price={3097.85}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/61lYIKPieDL._AC_UY218_.jpg" />
                </div>

                <div className="home__row">
                    <Product
                        id="4903850"
                        title="6 Pack Sport Bands Compatible with Apple Watch Band 38mm 40mm 41mm 42mm 44mm 45mm 49mm,Soft Silicone Waterproof Strap Compatible with iWatch Apple Watch Series Ultra 8 7 6 5 4 3 2 1 SE Women Men"
                        price={18.99}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/71NGpVGuSPL._AC_UL450_SR450,320_.jpg" />
                    <Product
                        id="23445930"
                        title="Coolife Luggage 3 Piece Set Suitcase Spinner Hardshell Lightweight TSA Lock 4 Piece Set"
                        price={299.99}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/819xX-GWS5L._AC_UX569_.jpg"
                    />
                    <Product
                        id="4903850"
                        title="espresso Displays Portable Monitor - Touchscreen Portable External Monitor for Laptop - Stunning Ultra Thin - 15.6” 1080P Full HD - Travel Monitor - Freedom to Work The Way You Want Anywhere - USB-C"
                        price={499.99}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/714mHAqu2CL._AC_UL320_.jpg" />
                </div>

                <div className="home__row">
                    <Product
                        id="90829332"
                        title="Bettermade Loveseat Sofa,Futon Sofa for Living Room, Velvet Cover Modern Design Couch,Tools-Free Assemble,2 Seats with 600 LB Load,Blue"
                        price={359.99}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/71h-EZAuD8L._AC_SR270,270_.jpg" />
                    <Product
                        id="90829332"
                        title="Hand Blown Mexican Drinking Glasses and Pitcher – Set of 6 with Mexican Confetti Design (14 oz each) and Pitcher (84 Ounces) by The Wine Savant (Confetti)"
                        price={79.99}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/81OLqSssPkL._AC_UL320_.jpg" />
</div>


                <div className="home__row">
                    <Product
                        id="90829332"
                        title="PS5 Stand and Cooling Station with Dual Controller Charging Station for Playstation 5 Console, PS5 Accessories Incl. Controller Charger, Cooling fan, Headset holder, 3 USB Hub, Media Slot, Screw White"
                        price={41.99}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/71DiGaQ+1CL._AC_UL320_.jpg" />
                    <Product
                        id="4903850"
                        title="INSIGNIA All-New 39-inch Class F20 Series Smart HD 720p Fire TV (NS-39F201NA23, 2022 Model)"
                        price={299.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/51T4bcaiZ0L._AC_SX184_.jpg" />
                    <Product
                        id="4903850"
                        title="Charging Station, Wireless Charger Stand 3 in 1, Fast Wireless Charging Station for iPhone 14/13/12/11/Pro/Max/Plus/XS/XR/X/8, Apple Watch 8/7/6/5/4/3/2/SE & AirPodso"
                        price={29.99}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/41cUn5yRVdL._AC_UF226,226_FMjpg_.jpg" />
                </div>
            </div>
        </div>
    )
}

export default Home