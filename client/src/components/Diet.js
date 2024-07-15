import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link,useLocation } from 'react-router-dom';



const Diet = () => {
    const location = useLocation();
const message = location.state?.message;
    const [diets, setDiets] = useState([]);
    const [currentDiet, setCurrentDiet] = useState({
        mealType: '',
        items: [{ name: '', macros: { protein: '', carbs: '', fat: '' }, calories: '' }]
    });
    const [editing, setEditing] = useState(false);

    useEffect(() => {
        fetchDiets();
    }, []);

    const fetchDiets = async () => {
        try {
            const response = await axios.get('http//:localhost:3000/diets'); // Update this URL to your backend endpoint
            setDiets(response.data);
        } catch (error) {
            console.error('Error fetching diets:', error);
        }
    };

    const addDiet = async () => {
        try {
            const response = await axios.post('http//:localhost:3000/diets', currentDiet); // Update this URL to your backend endpoint
            setDiets([...diets, response.data]);
            setCurrentDiet({ mealType: '', items: [{ name: '', macros: { protein: '', carbs: '', fat: '' }, calories: '' }] });
        } catch (error) {
            console.error('Error adding diet:', error);
        }
    };

    const updateDiet = (diet) => {
        setCurrentDiet(diet);
        setEditing(true);
    };

    const saveDiet = async () => {
        try {
            const response = await axios.patch(`http//:localhost:3000/diets/${currentDiet._id}`, currentDiet); // Update this URL to your backend endpoint
            const updatedDiets = diets.map(diet =>
                diet._id === currentDiet._id ? response.data : diet
            );
            setDiets(updatedDiets);
            setCurrentDiet({ mealType: '', items: [{ name: '', macros: { protein: '', carbs: '', fat: '' }, calories: '' }] });
            setEditing(false);
        } catch (error) {
            console.error('Error saving diet:', error);
        }
    };

    const deleteDiet = async (id) => {
        try {
            await axios.delete(`http//:localhost:3000/diets/${id}`); // Update this URL to your backend endpoint
            setDiets(diets.filter(diet => diet._id !== id));
        } catch (error) {
            console.error('Error deleting diet:', error);
        }
    };

    const handleItemChange = (index, field, value) => {
        const newItems = [...currentDiet.items];
        newItems[index][field] = value;
        setCurrentDiet({ ...currentDiet, items: newItems });
    };

    const handleMacroChange = (index, macro, value) => {
        const newItems = [...currentDiet.items];
        newItems[index].macros[macro] = value;
        setCurrentDiet({ ...currentDiet, items: newItems });
    };

    const addItem = () => {
        setCurrentDiet({
            ...currentDiet,
            items: [...currentDiet.items, { name: '', macros: { protein: '', carbs: '', fat: '' }, calories: '' }]
        });
    };

    return (
        <div class="box">
        <div className="col-12">
        <nav className="navbar navbar-expand-lg navbar-light bg-black navb">
          <a className="navbar-brand" href="#">
            <img src="https://res.cloudinary.com/dfu4raix4/image/upload/v1718950120/atklqo31snvpy22d82t9.png" className="img" />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
              <nav>
                <Link to="/home" className="custom-link sechead" state={{ message: 'Please log in with your username and password.' }}>Home</Link>
                <Link to="/profile" className="custom-link sechead" state={{ message: 'Please log in with your username and password.' }}>Profile</Link>
                <Link to="/goals" className="custom-link sechead" state={{ message: 'Please log in with your username and password.' }}>Goals</Link>
                <Link to="/udhi" className="custom-link sechead" state={{ message: 'Please log in with your username and password.' }}>Workout Plans</Link>
                <Link to="/kallu" className="custom-link sechead" state={{ message: 'Please log in with your username and password.' }}>Workout Types</Link>
                <Link to="/diet" className="custom-link sechead" state={{ message: 'Please log in with your username and password.' }}>Diet</Link>
                <Link to="/track" className="custom-link sechead" state={{ message: 'Please log in with your username and password.' }}>Track</Link>
              </nav>
            </div>
          </div>
        </nav>
      </div>
      <div className="col-12 col-md-12 boot1">
      <div className="authspro">
        <div className="container mt-5">
            <h1 className="head">Diet Plans</h1>
            <div className="mb-3">
                <select
                    className="form-control optn"
                    value={currentDiet.mealType}
                    onChange={(e) => setCurrentDiet({ ...currentDiet, mealType: e.target.value })}
                >
                    <option value="" class="inpt">Select Meal Type</option>
                    <option value="breakfast" class="inpt">Breakfast</option>
                    <option value="lunch" class="inpt">Lunch</option>
                    <option value="dinner" class="inpt">Dinner</option>
                    <option value="snack" class="inpt">Snack</option>
                </select>
                {currentDiet.items.map((item, index) => (
                    <div key={index} className="mt-2">
                        <input
                            type="text"
                            className="form-control inpt"
                            placeholder="Item Name"
                            value={item.name}
                            onChange={(e) => handleItemChange(index, 'name', e.target.value)}
                        />
                        <input
                            type="number"
                            className="form-control inpt mt-2"
                            placeholder="Protein"
                            value={item.macros.protein}
                            onChange={(e) => handleMacroChange(index, 'protein', e.target.value)}
                        />
                        <input
                            type="number"
                            className="form-control inpt mt-2"
                            placeholder="Carbs"
                            value={item.macros.carbs}
                            onChange={(e) => handleMacroChange(index, 'carbs', e.target.value)}
                        />
                        <input
                            type="number"
                            className="form-control inpt mt-2"
                            placeholder="Fat"
                            value={item.macros.fat}
                            onChange={(e) => handleMacroChange(index, 'fat', e.target.value)}
                        />
                        <input
                            type="number"
                            className="form-control inpt mt-2"
                            placeholder="Calories"
                            value={item.calories}
                            onChange={(e) => handleItemChange(index, 'calories', e.target.value)}
                        />
                    </div>
                ))}
                <button className="btn btn-secondary mt-2 btnn" onClick={addItem}>Add Item</button>
                {editing ? (
                    <button className="btn btn-success mt-2 btnn" onClick={saveDiet}>Save</button>
                ) : (
                    <button className="btn btn-primary mt-2 btnnn" onClick={addDiet}>Add Diet Plan</button>
                )}
            </div>
            <ul className="list-group">
                {diets.map(diet => (
                    <li key={diet._id} className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                            <strong>{diet.mealType}</strong>
                            <ul>
                                {diet.items.map((item, index) => (
                                    <li key={index}>{item.name} - {item.calories} calories</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <button className="btn btn-warning mr-2" onClick={() => updateDiet(diet)}>Edit</button>
                            <button className="btn btn-danger" onClick={() => deleteDiet(diet._id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
        </div>
        </div>
        </div>
    );
};

export default Diet;
