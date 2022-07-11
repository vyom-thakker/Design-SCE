let dataV={"nodes": [
{"name":"LDPE"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"LABS from chemical recycling of PE"},
{"name":"C4 Gas Mixture Pyrolysis"},
{"name":"Light Liquid Fuel Pyrolysis"},
{"name":"Lactic acid from acid hydrolysis"},
{"name": "Losses"}
],
 "links": [
 {"source":"LDPE", "target":"Households", "value":0.5626, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":0.8845, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":1.2753, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.1718, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":1.1627, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1026, "optimal":"yes"} , 
{"source":"Segregation", "target":"LABS from chemical recycling of PE", "value":0.2889, "optimal":"yes"} , 
{"source":"Segregation", "target":"C4 Gas Mixture Pyrolysis", "value":0.0018, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.1245, "optimal":"yes"} , 
{"source":"Segregation", "target":"Lactic acid from acid hydrolysis", "value":0.7107, "optimal":"yes"} ]}; 
