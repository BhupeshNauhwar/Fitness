const exerciseData = [
    {
        "name": "Chest",
        "exercises": [
            {"name": "Bench Press", "description": "The bench press is a compound exercise that builds strength and muscle mass in the chest, shoulders, and triceps.", "imageUrl": "https://th.bing.com/th?id=OIP.9qcVqc_apexd-1uekO0FjwHaEz&w=310&h=201&c=8&rs=1&qlt=90&o=6&dpr=1.9&pid=3.1&rm=2"},
            {"name": "Push-ups", "description": "Push-ups are a classic bodyweight exercise that targets the chest, shoulders, and triceps.", "imageUrl": "https://th.bing.com/th?id=OIP.MvlMARINURfQKbYqjW0pogHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.9&pid=3.1&rm=2"},
            {"name": "Dumbbell Flyes", "description": "Dumbbell flyes are isolation exercises that target the chest muscles, particularly the pectoralis major.", "imageUrl": "https://th.bing.com/th?id=OIP.GZxxmv4GivkGFJe6TDmw-wHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.9&pid=3.1&rm=2"},
            {"name": "Chest Dips", "description": "Chest dips are a bodyweight exercise that primarily targets the lower chest muscles, triceps, and shoulders.", "imageUrl": "https://th.bing.com/th?id=OIP.BGQs8CYMq1p1yBuVrN5p8wHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.9&pid=3.1&rm=2"}
        ]
    },
    {
        "name": "Back",
        "exercises": [
            {"name": "Pull-ups", "description": "Pull-ups are an effective compound exercise that targets the muscles of the upper back, including the latissimus dorsi,z rhomboids, and traps.", "imageUrl": "https://i.insider.com/5f7c96bc282c500018c78dc7?width=700"},
            {"name": "Deadlifts", "description": "Deadlifts are a compound movement that targets the entire back, along with the glutes, hamstrings, and core.", "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcwV9kEzSjk2hImFwgF_pIA8pbweUFSSYAgA&s"},
            {"name": "Barbell Rows", "description": "Barbell rows are a compound exercise that targets the muscles of the upper and middle back, including the latissimus dorsi, rhomboids, and traps.", "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTukLVz7EBDO9803RZHnYEttBZXjYHvpc_OuA&s"},
            {"name": "Single-Arm Dumbbell Rows", "description": "Single-arm dumbbell rows are an effective unilateral exercise that targets the muscles of the back, including the lats and rhomboids.", "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7FFtZ5i7i6q9dboL7DDw5RqQQ214ckw6f2A&s"}
        ]
    },
    {
        "name": "Legs",
        "exercises": [
            {"name": "Squats", "description": "Squats are a compound exercise that targets the muscles of the lower body, including the quadriceps, hamstrings, glutes, and core.", "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJybEMVU9YhlAiriGkG_sSpLDUT7XnsG5Kzg&s"},
            {"name": "Lunges", "description": "Lunges are a unilateral exercise that targets the quadriceps, hamstrings, glutes, and calves.", "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBeSB56ZpMhiC40zUrp-EEMuSU23cVu94Mlw&s"},
            {"name": "Leg Press", "description": "The leg press is a machine-based exercise that targets the quadriceps, hamstrings, and glutes.", "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzRYyaGwzqTJ9aYUCgSFOJ-hTG86w_8GlpWg&s"},
            {"name": "Romanian Deadlifts", "description": "Romanian deadlifts are a variation of the deadlift that primarily targets the hamstrings, glutes, and lower back muscles.", "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlnbwnrgXCq8zhpaIb8nAtQNUkEQ7aP-DFag&s"}
        ]
    },
    {
        "name": "Shoulders",
        "exercises": [
            {"name": "Overhead Press", "description": "The overhead press is a compound exercise that primarily targets the deltoid muscles of the shoulders.", "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWmTjhnWhf-530a0qHA4DH1BZYICbxNUYQAbtDv93bcQ&s"},
            {"name": "Lateral Raises", "description": "Lateral raises are isolation exercises that target the lateral head of the deltoids, helping to build shoulder width and definition.", "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyTizKm8MHOTAPHqbI8vmrfaVDbfQYihy-Cw&s"},
            {"name": "Front Raises", "description": "Front raises target the anterior deltoids, helping to build strength and definition in the front of the shoulders.", "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcapd_0g50BG281O7744OaaD_KhvxU0Hz1cA&s"},
            {"name": "Upright Rows", "description": "Upright rows target the deltoids and upper traps, helping to build shoulder and upper back strength.", "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoY0hNESFoKmZ2ZfzCt6IcN2W_kWh3nPkCmw&s"}
        ]
    },
    {
        "name": "Arms",
        "exercises": [
            {"name": "Bicep Curls", "description": "Bicep curls are isolation exercises that target the biceps muscles, helping to build size and definition in the arms.", "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Yi4hYlALjF2Q4BNWySGjH-3KCpdj8oydnQ&s"},
            {"name": "Tricep Dips", "description": "Tricep dips are a bodyweight exercise that targets the triceps muscles, helping to build strength and definition in the arms.", "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiOIoD1GNWSFeJfLIC1WYcTmT7LObEe7xIBA&s"},
            {"name": "Hammer Curls", "description": "Hammer curls are a variation of bicep curls that target the brachialis and brachioradialis muscles, helping to build size and definition in the arms.", "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9eqtzoauh8PhIMY8ZqEV8EtKXDEKHW-TYFg&s"},
            {"name": "Skull Crushers", "description": "Skull crushers are an isolation exercise that targets the triceps muscles, helping to build strength and size in the arms.", "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE79y47N3XGpp3oY9oTWh5iTKpQTNYRVMUxw&s"}
        ]
    },
    {
        "name": "Abs",
        "exercises": [
            {"name": "Crunches", "description": "Crunches are a classic abdominal exercise that targets the rectus abdominis, helping to build core strength and definition.", "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8aSOKAhOfUEXlpWxPeZKXFLNL48WiBqYaoQ&s"},
            {"name": "Planks", "description": "Planks are an isometric exercise that targets the entire core, including the rectus abdominis, obliques, and transverse abdominis.", "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzgMpfs-ep7UCquUf1yhnHKRFOesnb9RtbvA&s"},
            {"name": "Russian Twists", "description": "Russian twists are a rotational exercise that targets the obliques, helping to build core stability and definition.", "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRseuIcIc8rnKQ-MxkvYVDnaEA4ksIlc5aiFA&s"},
            {"name": "Leg Raises", "description": "Leg raises target the lower abdominal muscles, helping to build strength and definition in the lower abs.", "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDvjwcmU862tenUg1E1fRYiciwidS-uktoTw&s"}
        ]
    }
];

module.exports = exerciseData;