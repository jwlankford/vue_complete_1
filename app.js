const app = Vue.createApp({
    data() {
      return {
        name: 'Jeremy Lankford', // Replace with your name
        age: 50,             // Replace with your age
        randomNumber: Math.random(),
        imageSrc: 'https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Replace with an actual image URL
        myName: 'Jeremy Lankford'     // Replace with your name for the input
      };
    }
  });
  
  app.mount('#assignment');