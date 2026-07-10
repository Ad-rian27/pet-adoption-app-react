import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'
import axios from 'axios'

const ViewPets = () => {

    const [petdata, changeData] = useState([])

    const fetchData = () => {
        axios.get("https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/pet.json").then(
            (response) => (
                changeData(response.data)
            )
        ).catch()
    }

    useEffect(
        () => (
            fetchData()
        ),[]
    )

    return (
        <div>
            <NavigationBar />
            <div className="container mt-5">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                                {petdata.map(
                                    (view, index) => {
                                        return (
                                            <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">

                                            <div className="card">
                                                <img src={view.image} className="card-img-top" height="300px" alt="..." />
                                                <div className="card-body">
                                                    <h6 className="card-text">Pet Name: {view.petName}</h6>
                                                    <h6 className="card-text">Species: {view.species}</h6>
                                                    <h6 className="card-text">Breed: {view.breed}</h6>
                                                    <h6 className="card-text">Age: {view.age}</h6>
                                                    <h6 className="card-text">Gender: {view.gender}</h6>
                                                    <h6 className="card-text">Adoption Fee: {view.adoptionFee}</h6>
                                                </div>
                                            </div>
                                            </div>
                                        )
                                    }
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    )
}

export default ViewPets