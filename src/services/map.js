const map=L.map("map").setView([-34.578459532847724,-58.42843895289317],11);L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19}).addTo(map);const circle=L.circle([-34.578459532847724,-58.42843895289317],{color:"red",fillColor:"#f03",fillOpacity:.2,radius:4e3}).addTo(map);