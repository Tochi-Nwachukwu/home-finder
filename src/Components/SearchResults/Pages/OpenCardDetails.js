import React from 'react';
import '../Cards.css';
import './OpenCardDetails.css';
import '../../../../node_modules/leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
<link
    rel="stylesheet"
    href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
    integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
    crossorigin=""
/>

function OpenCardDetails({ item }) {

    const position = [item.latitude, item.longitude]
    return (
        <div className='open-card-details__container'>
            <div className="open-card-details__room-details">
                <div className="card__details">
                    <h3 className="card__details-title">{item.address}</h3>
                    <h2 className="card__details-price">{item.currency} {item.price} pcm</h2>

                    <div className="util-flexbox">
                        <div className="card__details-rooms">
                            <span className="img-bed"></span> <span className="number">{item.bedrooms}</span> <span className="img-couch"></span> <span className="number"> {item.bathrooms}</span>
                        </div>

                        <div className="card__details--location">
                            <div className="card__details--location-img"></div>
                            <p className="class__details--location" id='util--open-card'>
                                {item.address}
                            </p>
                        </div>

                        <p className="class__details--location " id='util--open-card'>
                            furnished
                        </p>
                        <p className="card__details--movein-date">
                            Move-in from 20/04/21
                        </p>
                        <div className="card__details--email" id='util--top'></div>
                    </div>
                </div>
            </div>

            <div className="open-card__map">

                <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup id="popup">
                            {item.address}
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>

            <div className="open-card__description">
                <p className="description">
                    Situated on the 12th floor of the Crawford Building this modern one bedroom flat is available to rent end of June. Early viewings are highly recommended.<br />
                    <br />
                    This modern apartment features an open plan kitchen/ living area, a large bathroom and a double sized bedroom with fitted wardrobe. Other benefits include, floor to ceiling windows and a 24 hour concierge service.
                    <br />
                    <br />
                    The Crawford building itself has it's own entrance to Aldgate East Underground station which makes it ideal for transport links.
                </p>
            </div>
        </div>
    )
}

export default OpenCardDetails
