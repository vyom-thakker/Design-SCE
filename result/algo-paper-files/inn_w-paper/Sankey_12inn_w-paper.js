let dataV={"nodes": [
{"name":"Landfill"},
{"name":"HDPE"},
{"name":"LDPE"},
{"name":"PP"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"LABS from chemical recycling of PE"},
{"name":"C4 Gas Mixture Pyrolysis"},
{"name":"Light Liquid Fuel Pyrolysis"},
{"name": "Losses"}
],
 "links": [
 {"source":"HDPE", "target":"Households", "value":0.399, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.5468, "optimal":"yes"} , 
{"source":"PP", "target":"Households", "value":0.1093, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.9299, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.1253, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.8478, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0748, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.1496, "optimal":"yes"} , 
{"source":"Segregation", "target":"LABS from chemical recycling of PE", "value":0.3922, "optimal":"yes"} , 
{"source":"Segregation", "target":"C4 Gas Mixture Pyrolysis", "value":0.0109, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.2123, "optimal":"yes"} ]}; 
