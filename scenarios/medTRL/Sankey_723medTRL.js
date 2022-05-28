let dataV={"nodes": [
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"HDPE"},
{"name":"LDPE"},
{"name":"PP"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rLDPE"},
{"name":"Lumber"},
{"name":"C4 Gas Mixture Pyrolysis"},
{"name":"Light Liquid Fuel Pyrolysis"},
{"name": "Losses"}
],
 "links": [
 {"source":"HDPE", "target":"Households", "value":0.0154, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.5945, "optimal":"yes"} , 
{"source":"PP", "target":"Households", "value":0.2055, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.7186, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.0968, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.6552, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0578, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.1156, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.2452, "optimal":"yes"} , 
{"source":"Segregation", "target":"C4 Gas Mixture Pyrolysis", "value":0.0289, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.1984, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.0038, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.1349, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.0796, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.027000000000000003, "optimal":"yes"} ]}; 