let dataV={"nodes": [
{"name":"Landfill"},
{"name":"LDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rLDPE"},
{"name":"Lumber"},
{"name":"Light Liquid Fuel Pyrolysis"},
{"name": "Losses"}
],
 "links": [
 {"source":"LDPE", "target":"Households", "value":0.7147, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.2594, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.4553, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.2365, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0209, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0417, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.1942, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.0004, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.1068, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.066, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0214, "optimal":"yes"} ]}; 
