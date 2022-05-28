let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"Landfill"},
{"name":"LDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rLDPE"},
{"name":"LABS from chemical recycling of PE"},
{"name":"C4 Gas Mixture Pyrolysis"},
{"name":"Light Liquid Fuel Pyrolysis"},
{"name": "Losses"}
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.0006, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.7147, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.5163, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.1984, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.0032, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.4669, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0415, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0824, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.0002, "optimal":"yes"} , 
{"source":"Segregation", "target":"LABS from chemical recycling of PE", "value":0.1998, "optimal":"yes"} , 
{"source":"Segregation", "target":"C4 Gas Mixture Pyrolysis", "value":0.0052, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.1378, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Pyrolysis", "value":0.0001, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.0001, "optimal":"yes"} ]}; 