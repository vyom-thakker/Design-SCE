let dataV={"nodes": [
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"LDPE"},
{"name":"Paper"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rLDPE"},
{"name":"rPaper"},
{"name":"Lumber"},
{"name": "Losses"}
],
 "links": [
 {"source":"Incineration", "target":"Landfill", "value":0.0012, "optimal":"yes"} , 
{"source":"Incineration", "target":"Losses", "value":0.0589, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.0672, "optimal":"yes"} , 
{"source":"Paper", "target":"Households", "value":9.4803, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":2.3434, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":7.204, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Incineration", "value":1.7307, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.34700000000000003, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1886, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0612, "optimal":"yes"} , 
{"source":"Segregation", "target":"Incineration", "value":1.7307, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.002, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPaper", "value":0.2837, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.0011, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.0007, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0002, "optimal":"yes"} , 
{"source":"rPaper", "target":"Paper", "value":0.2798, "optimal":"yes"} , 
{"source":"rPaper", "target":"Losses", "value":0.0037, "optimal":"yes"} ]}; 
