## gladys-google-direction

This module allows you to calculate travel time in Gladys.
Need Gladys >= 3.5.5.

#### Configuration

- Install this module in Gladys. Do not reboot for the moment.
- Visit [Google Developpers Console](https://console.developers.google.com/project)
- Click **CREATE PROJECT**
- Enter a *Project Name* (for example "Gladys") , then click **CREATE**
- Select *Google Maps Directions API* under *Google Maps API*.

![Google Developpers Console](https://gladysproject.com/assets/images/external/google-direction/1.google-api-dashboard.png)

- Then, click on "Activate" to activate the API

![Google directions API](https://gladysproject.com/assets/images/external/google-direction/2.google-directions-api.png)

- You need then to create an API Key. Click on create identifier

![Google create identifier](https://gladysproject.com/assets/images/external/google-direction/3.google-create-identifier.png)

- You should see something like this:

![Add identifier](https://gladysproject.com/assets/images/external/google-direction/4.add-identifier.png)

- Now, all you have to do is to save your API Key: 

![Get api Key](https://gladysproject.com/assets/images/external/google-direction/5.get-api-key.png)

- Go to Gladys, and go to "Parameters" => "Parameters". Create an entry:
Name = *GOOGLE_DIRECTION_API_KEY*, value = YOUR API KEY
- Reboot Gladys
- It's ok!

#### Usage

Create a script, and enter:

```javascript
gladys.direction.travelTime({
    origin: '12 rue des champs élysées 75008 Paris',
    destination: '132 Rue de Courcelles, 75017 Paris'
})
.then(function(result){
    // result = { duration: 493 } 
    // duration is in seconds
    console.log(`Travel time is ${result.duration} seconds`);
})
.catch(console.log)
```