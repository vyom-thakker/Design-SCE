let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"LDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Dropoff"},
{"name":"Segregation"},
{"name":"rLDPE"},
{"name":"Lumber"},
{"name":"LABS from chemical recycling of PE"},
{"name":"C4 Gas Mixture Pyrolysis"},
{"name":"Light Liquid Fuel Pyrolysis"},
{"name": "Losses"}
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.0101, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.7147, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.629, "optimal":"yes"} , 
{"source":"Households", "target":"Dropoff", "value":0.0008, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.0848, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.0503, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.5132, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0506, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Pyrolysis", "value":0.0001, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Segregation", "value":0.0007, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Losses", "value":0.0001, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.4822, "optimal":"yes"} , 
{"source":"Segregation", "target":"LABS from chemical recycling of PE", "value":0.0164, "optimal":"yes"} , 
{"source":"Segregation", "target":"C4 Gas Mixture Pyrolysis", "value":0.0004, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.0113, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.2652, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.1639, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.053, "optimal":"yes"} ]}; 