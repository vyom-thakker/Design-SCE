let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"HDPE"},
{"name":"LDPE"},
{"name":"PP"},
{"name":"PLA"},
{"name":"Paper"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Dropoff"},
{"name":"Segregation"},
{"name":"rHDPE"},
{"name":"rLDPE"},
{"name":"rPP"},
{"name":"rPLA"},
{"name":"rPaper"},
{"name":"Compost"},
{"name":"Clinker"},
{"name":"Lumber"},
{"name": "Losses"}
],
 "links": [
 {"source":"Paper", "target":"Households", "value":10.7722, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":9.4935, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":1.2788, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Landfill", "value":8.3694, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.7639, "optimal":"yes"} ,


{"source": "HDPE", "target": "Households", "value": 0, "optimal": "yes"}, {"source": "LDPE", "target": "Households", "value": 0.0, "optimal": "yes"}, {"source": "PP", "target": "Households", "value": 0, "optimal": "yes"}, {"source": "PLA", "target": "Households", "value": 0, "optimal": "yes"}, {"source": "Paper", "target": "Households", "value": 0, "optimal": "yes"}, {"source": "Households", "target": "Curbside Collection", "value": 0, "optimal": "yes"}, {"source":        "Households", "target": "Dropoff", "value": 0, "optimal": "yes"}, {"source": "Households", "target": "Losses", "value": 0.0, "optimal": "yes"}, {"source": "Curbside Collection", "target": "Incineration", "value": 0, "optimal": "yes"}, {"source": "Dropoff", "target": "Incineration", "value": 0, "optimal": "yes"}, {"source": "Curbside Collection", "target": "Landfill", "value": 0, "optimal": "yes"}, {"source": "Dropoff", "target": "Landfill", "value": 0, "optimal": "yes"}, {"source":                "Curbside Collection", "target": "Pyrolysis", "value": 0, "optimal": "yes"}, {"source": "Dropoff", "target": "Pyrolysis", "value": 0, "optimal": "yes"}, {"source": "Curbside Collection", "target": "Segregation", "value": 0, "optimal": "yes"}, {"source": "Dropoff", "target": "Segregation", "value": 0, "optimal": "yes"}, {"source": "Curbside Collection", "target": "Losses", "value": 0, "optimal": "yes"}, {"source": "Dropoff", "target": "Losses", "value": 0,                        "optimal": "yes"}, {"source": "Incineration", "target": "Losses", "value": 0, "optimal": "yes"}, {"source": "Incineration", "target": "Landfill", "value": 0, "optimal": "yes"}, {"source": "Landfill", "target": "Losses", "value": 0, "optimal": "yes"}, {"source": "Pyrolysis", "target": "Losses", "value": 0, "optimal": "yes"}, {"source": "Segregation", "target": "Losses", "value": 0.0, "optimal": "yes"}, {"source": "Segregation", "target": "rHDPE",                                "value": 0.0, "optimal": "yes"}, {"source": "Segregation", "target": "rLDPE", "value": 0.0, "optimal": "yes"}, {"source": "Segregation", "target": "rPP", "value": 0.0, "optimal": "yes"}, {"source": "Segregation", "target": "rPLA", "value": 0.0, "optimal": "yes"}, {"source": "Segregation", "target": "rPaper", "value": 0.0, "optimal": "yes"}, {"source": "Segregation", "target": "Compost", "value": 0.0, "optimal": "yes"}, {"source": "rHDPE", "target":                                        "Losses", "value": 0, "optimal": "yes"}, {"source": "rLDPE", "target": "Losses", "value": 0, "optimal": "yes"}, {"source": "rPP", "target": "Losses", "value": 0, "optimal": "yes"}, {"source": "rPLA", "target": "Losses", "value": 0, "optimal": "yes"}, {"source": "rPaper", "target": "Losses", "value": 0, "optimal": "yes"}, {"source": "Compost", "target": "Losses", "value": 0, "optimal": "yes"}, {"source": "rPaper", "target": "Losses", "value": 0,                                                "optimal": "yes"}, {"source": "Segregation", "target": "Lumber", "value": 0, "optimal": "yes"}, {"source": "Segregation", "target": "Clinker", "value": 0, "optimal": "yes"}, {"source": "Lumber", "target": "Losses", "value": 0, "optimal": "yes"}, {"source": "Clinker", "target": "Losses", "value": 0, "optimal": "yes"}, {"source": "rHDPE", "target": "Lumber", "value": 0, "optimal": "yes"}, {"source": "rHDPE", "target": "Clinker",                                                        "value": 0, "optimal": "yes"}, {"source": "rLDPE", "target": "Clinker", "value": 0, "optimal": "yes"}, {"source": "rPP", "target": "Clinker", "value": 0, "optimal": "yes"}, {"source": "rPLA", "target": "Compost", "value": 0, "optimal": "yes"}]}; 