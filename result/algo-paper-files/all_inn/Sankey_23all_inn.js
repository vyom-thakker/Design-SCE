let dataV={"nodes": [
{"name":"Landfill"},
{"name":"HDPE"},
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
 {"source":"HDPE", "target":"Households", "value":0.1669, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.6703, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.7378, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.0994, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.6727, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0594, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.1187, "optimal":"yes"} , 
{"source":"Segregation", "target":"LABS from chemical recycling of PE", "value":0.3585, "optimal":"yes"} , 
{"source":"Segregation", "target":"C4 Gas Mixture Pyrolysis", "value":0.0004, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.1415, "optimal":"yes"} ]}; 
