// src/components/Home.js
import React from 'react';
import { useLocation,Link } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const message = location.state?.message;
  return (
    <div class="box">

<div className="col-12">
        <nav className="navbar navbar-expand-lg navbar-light bg-black navb">
          <a className="navbar-brand">
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
                    <div>
                    <div class="wcu-section p-4">
        
                <div class="col-12">
                    <h1 class="wcu-section-heading">Welcome to Fitness Tracker</h1>
                    <p class="wcu-section-description">

                    Welcome to Fitness Tracker, your comprehensive fitness tracker app designed to help you achieve your health and fitness goals. Fitness Tracker is your perfect companion on the journey to a healthier lifestyle, offering workout Goals, personalized workout plans and types, and Diet nutrition guidance and track the user Details
                    </p>
                    <div>

     <h1>Track Your Fitness Journey</h1>  
     <p>Fitness tracker provides information to track every aspect of your fitness journey. With real-time data and detailed analytics, you can monitor your progress, stay motivated, and achieve your fitness goals faster.</p>               
                    </div>
                </div>
                <div class="d-flex flex-row">
                <div class="col-12 col-md-4 m-3 box1">
                    <div class="wcu-card p-3 mb-3 shadow">
                        <img src="https://res.cloudinary.com/dfu4raix4/image/upload/v1718970934/sg2etsjyncmwvlp6kje1.jpg" class="img1" />
                        <h1 class="wcu-card-title mt-3">For weight loss</h1>
                        <p class="wcu-card-description">
                        To achieve weight loss, combine regular workouts and a balanced diet. Engage in a mix of cardio exercises, like running or cycling, and strength training to boost metabolism and build muscle. Complement your workouts with a diet rich in whole foods, including vegetables, fruits, lean proteins, and whole grains, while reducing intake of processed foods, sugary drinks, and high-fat snacks. Consistency and moderation are key to sustainable weight loss.
                        </p>
                    </div>
                </div>
                <div class="col-12 col-md-4 m-3 box1">
                    <div class="wcu-card p-3 mb-3 shadow">
                        <img src="https://www.eatthis.com/wp-content/uploads/sites/4/2019/05/couple-flat-tummy-running-on-beach.png?strip=1&w=640&quality=82" class="img2" />
                        <h1 class="wcu-card-title mt-3">Flat Belly</h1>
                        <p class="wcu-card-description">
                        To achieve a flat belly, combine cardio exercises like running or cycling with strength training focused on your core, such as planks and leg raises. Maintain a balanced diet high in fiber, lean proteins, and healthy fats while minimizing sugar and refined carbs. Staying hydrated and avoiding bloating foods can also help reveal a flatter stomach.
                        </p>
                    </div>
                </div>
                </div>
               <div class="d-flex flex-row">
                <div class="col-12 col-md-4 m-3 box1">
                    <div class="wcu-card p-3 mb-3 shadow">
                        <img src="https://images.pexels.com/photos/3822167/pexels-photo-3822167.jpeg?auto=compress&cs=tinysrgb&w=600" class="img2" />
                        <h1 class="wcu-card-title mt-3">Flexibility</h1>
                        <p class="wcu-card-description">
                        To improve flexibility, incorporate a variety of stretching exercises such as dynamic stretches before workouts and static stretches afterward. Yoga and Pilates are excellent for enhancing flexibility. Complement these activities with a balanced diet rich in vitamins and minerals, particularly those that support muscle and joint health, like calcium and magnesium. Staying hydrated and including lean proteins, healthy fats, and a variety of fruits and vegetables in your diet will also aid in muscle recovery and overall flexibility.
                        </p>
                    </div>
                
        </div>
        <div class="col-12 col-md-4 m-3 box1">
                    <div class="wcu-card p-3 mb-3 shadow">
                        <img src="https://prod-ne-cdn-media.puregym.com/media/819394/gym-workout-plan-for-gaining-muscle_header.jpg?quality=80&mode=pad&width=992" class="img2" />
                        <h1 class="wcu-card-title mt-3">Muscle Gain </h1>
                        <p class="wcu-card-description">
                        To gain muscle, engage in strength training exercises such as weightlifting, focusing on compound movements like squats, deadlifts, and bench presses. Ensure progressive overload by gradually increasing the weight or resistance. Complement your workouts with a high-protein diet, including lean meats, eggs, dairy, legumes, and nuts. Additionally, consume complex carbohydrates and healthy fats to support energy levels and muscle recovery. Adequate hydration and rest are also crucial for muscle growth.
                        </p>
                    </div>
                
        
        </div>
        
</div>
<div class="flex-container m-2">
        <div>
            <h2>Features</h2>
            <ul>
                <li>Step Counter: Tracks your daily steps to help you stay active.</li>
                <li>Heart Rate Monitor: Monitors your heart rate throughout the day.</li>
                <li>Sleep Tracker: Analyzes your sleep patterns for better rest.</li>
                <li>Calorie Tracker: Helps you keep track of your calorie intake and expenditure.</li>
                <li>Activity Reminders: Reminds you to stay active with regular notifications.</li>
            </ul>
        </div>
        <div>
            <h2>Benefits</h2>
            <ul>
                <li>Improves physical activity by tracking steps and exercise routines.</li>
                <li>Helps monitor and maintain a healthy heart rate.</li>
                <li>Enhances sleep quality by providing detailed sleep analysis.</li>
                <li>Aids in weight management through calorie tracking.</li>
                <li>Encourages a more active lifestyle with regular activity reminders.</li>
            </ul>
        </div>
    </div>
    </div>


                    </div>


                </div>
    
    
   
  );
};

export default Home;
