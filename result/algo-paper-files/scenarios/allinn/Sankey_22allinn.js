let dataV={"nodes": [
{"name":"Landfill"},
{"name":"LDPE"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Dropoff"},
{"name":"Segregation"},
{"name":"LABS from chemical recycling of PE"},
{"name":"C4 Gas Mixture Pyrolysis"},
{"name":"Light Liquid Fuel Pyrolysis"},
{"name":"Lactic acid from acid hydrolysis"},
{"name": "Losses"}
],
 "links": [
 {"source":"LDPE", "target":"Households", "value":0.7066, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":0.0471, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.664, "optimal":"yes"} , 
{"source":"Households", "target":"Dropoff", "value":0.0003, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.0895, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.6054, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0534, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Segregation", "value":0.0002, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.1069, "optimal":"yes"} , 
{"source":"Segregation", "target":"LABS from chemical recycling of PE", "value":0.2565, "optimal":"yes"} , 
{"source":"Segregation", "target":"C4 Gas Mixture Pyrolysis", "value":0.0053, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.1583, "optimal":"yes"} , 
{"source":"Segregation", "target":"Lactic acid from acid hydrolysis", "value":0.0312, "optimal":"yes"} ]}; 
