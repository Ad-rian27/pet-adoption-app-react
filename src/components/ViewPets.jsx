import React, { useState } from 'react'
import NavigationBar from './NavigationBar'

const ViewPets = () => {

    const [petdata, changeData] = useState(

        [
            {
                "petId": "PET401",
                "petName": "Bruno",
                "species": "Dog",
                "breed": "Labrador Retriever",
                "age": 2,
                "gender": "Male",
                "vaccinated": "Yes",
                "adoptionFee": "2500",
                "image": "https://images.unsplash.com/photo-1543466835-00a7907e9de1?fm=jpg&q=60&w=1200&auto=format&fit=crop",
                "description": "Playful and friendly Labrador, great with kids."
            },
            {
                "petId": "PET402",
                "petName": "Misty",
                "species": "Cat",
                "breed": "Indian Shorthair",
                "age": 1,
                "gender": "Female",
                "vaccinated": "Yes",
                "adoptionFee": "1200",
                "image": "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?fm=jpg&q=60&w=1200&auto=format&fit=crop",
                "description": "Calm indoor cat who loves sunny windowsills."
            },
            {
                "petId": "PET403",
                "petName": "Rocky",
                "species": "Dog",
                "breed": "Pug",
                "age": 3,
                "gender": "Male",
                "vaccinated": "Yes",
                "adoptionFee": "3000",
                "image": "https://images.unsplash.com/photo-1517849845537-4d257902454a?fm=jpg&q=60&w=1200&auto=format&fit=crop",
                "description": "Adorable pug with a big personality, apartment friendly."
            },
            {
                "petId": "PET404",
                "petName": "Goldie",
                "species": "Dog",
                "breed": "Golden Retriever",
                "age": 1,
                "gender": "Female",
                "vaccinated": "No",
                "adoptionFee": "4000",
                "image": "https://images.unsplash.com/photo-1552053831-71594a27632d?fm=jpg&q=60&w=1200&auto=format&fit=crop",
                "description": "Energetic puppy looking for an active family."
            },
            {
                "petId": "PET405",
                "petName": "Shadow",
                "species": "Cat",
                "breed": "Bombay Cat",
                "age": 4,
                "gender": "Male",
                "vaccinated": "Yes",
                "adoptionFee": "1500",
                "image": "https://images.unsplash.com/photo-1573865526739-10659fec78a5?fm=jpg&q=60&w=1200&auto=format&fit=crop",
                "description": "Sleek black cat, independent but affectionate."
            },
            {
                "petId": "PET406",
                "petName": "Luna",
                "species": "Cat",
                "breed": "Siamese",
                "age": 2,
                "gender": "Female",
                "vaccinated": "Yes",
                "adoptionFee": "2000",
                "image": "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?fm=jpg&q=60&w=1200&auto=format&fit=crop",
                "description": "Blue-eyed Siamese who talks back when you talk to her."
            },
            {
                "petId": "PET407",
                "petName": "Snowy",
                "species": "Rabbit",
                "breed": "White Dwarf",
                "age": 1,
                "gender": "Female",
                "vaccinated": "No",
                "adoptionFee": "800",
                "image": "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?fm=jpg&q=60&w=1200&auto=format&fit=crop",
                "description": "Gentle dwarf rabbit, perfect first pet for children."
            },
            {
                "petId": "PET408",
                "petName": "Simba",
                "species": "Dog",
                "breed": "Indie (Desi)",
                "age": 2,
                "gender": "Male",
                "vaccinated": "Yes",
                "adoptionFee": "500",
                "image": "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?fm=jpg&q=60&w=1200&auto=format&fit=crop",
                "description": "Rescued street dog, loyal, healthy and house-trained."
            }
        ]

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