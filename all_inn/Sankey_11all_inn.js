let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"Landfill"},
{"name":"HDPE"},
{"name":"LDPE"},
{"name":"PP"},
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
 {"source":"Pyrolysis", "target":"Losses", "value":0.0082, "optimal":"yes"} , 
{"source":"HDPE", "target":"Households", "value":0.3843, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.5937, "optimal":"yes"} , 
{"source":"PP", "target":"Households", "value":0.029, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":0.0137, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.8992, "optimal":"yes"} , 
{"source":"Households", "target":"Dropoff", "value":0.0004, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.1212, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.0413, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.7703, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0723, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Segregation", "value":0.0003, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.136, "optimal":"yes"} , 
{"source":"Segregation", "target":"LABS from chemical recycling of PE", "value":0.3837, "optimal":"yes"} , 
{"source":"Segregation", "target":"C4 Gas Mixture Pyrolysis", "value":0.0027, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.1718, "optimal":"yes"} , 
{"source":"Segregation", "target":"Lactic acid from acid hydrolysis", "value":0.0085, "optimal":"yes"} ]}; 
