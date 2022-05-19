let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"Landfill"},
{"name":"LDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Dropoff"},
{"name":"Segregation"},
{"name":"LABS from chemical recycling of PE"},
{"name":"C4 Gas Mixture Pyrolysis"},
{"name":"Light Liquid Fuel Pyrolysis"},
{"name": "Losses"}
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.0215, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.7147, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.628, "optimal":"yes"} , 
{"source":"Households", "target":"Dropoff", "value":0.0019, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.0848, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.1076, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.4435, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0505, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Pyrolysis", "value":0.0003, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Segregation", "value":0.0013, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Losses", "value":0.0002, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0785, "optimal":"yes"} , 
{"source":"Segregation", "target":"LABS from chemical recycling of PE", "value":0.1904, "optimal":"yes"} , 
{"source":"Segregation", "target":"C4 Gas Mixture Pyrolysis", "value":0.005, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.1314, "optimal":"yes"} ]}; 
