let dataV={"nodes": [
{"name":"LDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"LABS from chemical recycling of PE"},
{"name":"C4 Gas Mixture Pyrolysis"},
{"name":"Light Liquid Fuel Pyrolysis"},
{"name": "Losses"}
],
 "links": [
 {"source":"LDPE", "target":"Households", "value":0.7147, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.2104, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.5043, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.1918, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0169, "optimal":"yes"} , 
{"source":"Segregation", "target":"LABS from chemical recycling of PE", "value":0.0997, "optimal":"yes"} , 
{"source":"Segregation", "target":"C4 Gas Mixture Pyrolysis", "value":0.0026, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.0688, "optimal":"yes"} ]}; 
