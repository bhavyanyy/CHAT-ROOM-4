var firebaseConfig = {
    apiKey: "AIzaSyBZDXATHRaqNviSbF-ej_QM2v8TywRJ3DY",
    authDomain: "kwitter-5e631.firebaseapp.com",
    databaseURL: "https://kwitter-5e631-default-rtdb.firebaseio.com",
    projectId: "kwitter-5e631",
    storageBucket: "kwitter-5e631.appspot.com",
    messagingSenderId: "1033997868943",
    appId: "1:1033997868943:web:65321c6a2b51fcb968b5fa"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("roomName");
    function send(){
        msg=document.getElementById("message").value;
        firebase.database().ref(room_name).push({
              name:user_name,like:0,message:msg
        });
        document.getElementById("message").value="";
    }
