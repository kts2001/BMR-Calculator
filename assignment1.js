function calculate1() {
    var bmr;
    var Gender;
    var calories = 0;
    var Age = document.getElementById("age").value;
    var Height = document.getElementById("height").value;
    var Weight = document.getElementById("weight").value;
    var Gender = document.getElementById("Gender").value;

    var activity1 = document.getElementById("activity1");
    var activity2 = document.getElementById("activity2");
    var activity3 = document.getElementById("activity3");
    var activity4 = document.getElementById("activity4");
    var activity5 = document.getElementById("activity5");
    (activity1.checked) ? (calories += 1.2) : (calories += 0);
    (activity2.checked) ? (calories += 1.375) : (calories += 0);
    (activity3.checked) ? (calories += 1.55) : (calories += 0);
    (activity4.checked) ? (calories += 1.725) : (calories += 0);
    (activity5.checked) ? (calories += 1.9) : (calories += 0);
    (Gender == "Male") ? bmr = 66.5 + (13.75 * Weight ) + (5.003 * Height ) - (6.755 * Age ) : bmr = 655 + (9.563 * Weight ) + (1.850 * Height ) - (4.676 * Age);
    (Gender == "Female") ? bmr = 655 + (9.563 * Weight ) + (1.850 * Height ) - (4.676 * Age ) : bmr = 66.5 + (13.75 * Weight ) + (5.003 * Height ) - (6.755 * Age);
    GrandCalories = bmr + calories;
    
    document.write("<p>Your Basal Metabolic Rate is " + bmr + "</p>");
    document.write("<p>Your daily calories intake is " + GrandCalories + "</p>");
}
document.getElementById("submit").addEventListener("click", calculate1, false);

function calculate2() {
    var bmr;
    var Gender;
    var calories = 0;
    var Age = document.getElementById("age").value;
    var Height = document.getElementById("height").value;
    var Weight = document.getElementById("weight").value;
    var Gender = document.getElementById("Gender").value;

    var activity1 = document.getElementById("activity1");
    var activity2 = document.getElementById("activity2");
    var activity3 = document.getElementById("activity3");
    var activity4 = document.getElementById("activity4");
    var activity5 = document.getElementById("activity5");
    (activity1.checked) ? (calories += 1.2) : (calories += 0);
    (activity2.checked) ? (calories += 1.375) : (calories += 0);
    (activity3.checked) ? (calories += 1.55) : (calories += 0);
    (activity4.checked) ? (calories += 1.725) : (calories += 0);
    (activity5.checked) ? (calories += 1.9) : (calories += 0);
    (Gender == "Male") ? bmr = 66 + (6.2 * Weight) + (12.7 * Height) - (6.76 * Age) : 655 + (4.35 * Weight) + (4.7 * Height) - (4.7 * Age);
    (Gender == "Female") ? bmr = 655 + (4.35 * Weight) + (4.7 * Height) - (4.7 * Age) : 66 + (6.2 * Weight) + (12.7 * Height) - (6.76 * Age);
    GrandCalories = bmr + calories;
    
    document.write("<p>Your Basal Metabolic Rate is " + bmr + " </p>");
    document.write("<p>Your daily calories intake is " + GrandCalories + " </p>");
}
document.getElementById("submit").addEventListener("click", calculate2, false);

