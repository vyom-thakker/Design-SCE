let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"LDPE"},
{"name":"Paper"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Dropoff"},
{"name": "Losses"}
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.6281, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.4317, "optimal":"yes"} , 
{"source":"Paper", "target":"Households", "value":4.2663, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":4.0839, "optimal":"yes"} , 
{"source":"Households", "target":"Dropoff", "value":0.0563, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.5577, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":3.1035, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.3286, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Pyrolysis", "value":0.0407, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Losses", "value":0.0064, "optimal":"yes"} ]}; 
