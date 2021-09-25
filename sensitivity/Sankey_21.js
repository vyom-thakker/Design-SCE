let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"HDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rHDPE"},
{"name":"Lumber"},
{"name": "Losses"}
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.0072, "optimal":"yes"} , 
{"source":"HDPE", "target":"Households", "value":2.4422, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":2.1522, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.2899, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.0359, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":2.1155, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1732, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.3734, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":1.7421, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Incineration", "value":0.5856, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.9582, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Lumber", "value":0.0416, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.1568, "optimal":"yes"} ]}; 