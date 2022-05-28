let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"LDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Dropoff"},
{"name":"Segregation"},
{"name":"rLDPE"},
{"name":"Lumber"},
{"name":"C4 Gas Mixture Pyrolysis"},
{"name":"Light Liquid Fuel Pyrolysis"},
{"name": "Losses"}
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.0083, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.7147, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.6293, "optimal":"yes"} , 
{"source":"Households", "target":"Dropoff", "value":0.0006, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.0848, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.0415, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Landfill", "value":0.0252, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.4972, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0506, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Segregation", "value":0.0004, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Losses", "value":0.0001, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0878, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.2303, "optimal":"yes"} , 
{"source":"Segregation", "target":"C4 Gas Mixture Pyrolysis", "value":0.0099, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.1294, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.0498, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.1267, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.0285, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0253, "optimal":"yes"} ]}; 