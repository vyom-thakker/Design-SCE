let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"HDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rHDPE"},
{"name": "Losses"}
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.0067, "optimal":"yes"} , 
{"source":"HDPE", "target":"Households", "value":2.4422, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":2.063, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.3792, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.0334, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":2.0289, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.166, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.3581, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":1.6708, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Incineration", "value":0.6015, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.9189, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.1504, "optimal":"yes"} ]}; 
