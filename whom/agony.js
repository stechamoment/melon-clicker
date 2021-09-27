//display: inline;
let yeah = document.getElementById("yeah");
yeah.onclick = click;
let cattreatsowned = 0;
let noMelons = 0;
let Melongain = 1;
let MelongainPS = 0;
let cattreatcost = 10;
let fninjacost = 50;
let fninjaowned = 0;
let sekiroowned = 0;
let brynowned = 0;
let sekirocost = 500;
let bryncost = 2000;
let meloncost = 10000;
let catreatv = 1
let fninjav = 10;
let Melongainholder = 1;
let startreatcost = 12000;
let sekirov = 100;
let odachicost = 20000;
let brynv = 500;
let dservices = false;
let startreatowned = false;
let timer = setInterval(meloncountfunction, 10);
let timer2 = setInterval(meloncountfunction2, 20);
cattreat.onclick = boughtcattreat;
fortniteninja.onclick = boughtfninja;
function whatever() {
    let doneTheStuff = false;
    if (!doneTheStuff) {
        document.getElementById("fninjadesc")
        document.getElementById("meloncount").value = (" "+Math.round(noMelons) + " stolen melons"+" ("+MelongainPS+" per second, "+Math.round(Melongain)+" per click)");
        document.getElementById("cattreatcosthtml").innerHTML = "Cost: 10";
        document.getElementById("fninjacosthtml").innerHTML = "Cost: "+fninjacost;
        document.getElementById("sekirocosthtml").innerHTML = "Cost: "+sekirocost;
        document.getElementById("bryncosthtml").innerHTML = "Cost: "+bryncost;
        document.getElementById("melonhtml").innerHTML = "Requires an initial gift of 10000 melons. Can be toggled on or off freely afterward.";
        document.getElementById("devourerdesc").innerHTML = " He will reduce your melons per second to zero as payment, but add "+(20+cattreatsowned)+"% of it to your melons per click.";
        document.getElementById("cattreatdesc").innerHTML = " A tasty treat that helps you distracts the cat, allowing you to steal +1 melons per click.";
        document.getElementById("sekirodesc").innerHTML = "A very good ninja. Japanese. Depressed. His name is Sekiro. Steals +100 melons every second.";
        document.getElementById("fninjadesc").innerHTML = "Not a very good ninja, despite being called ninja. Plays fortnite most of the time. Steals +10 melons every second.";
        doneTheStuff = true;
    }
}
function meloncountfunction() {
    if(dservices){
    document.getElementById("meloncount").value = (" "+Math.round(noMelons) + " stolen melons"+" (0 per second, "+Math.round(Melongain)+" per click)");
        
    }else{
        noMelons = noMelons + MelongainPS / 100;
    document.getElementById("meloncount").value = (" "+Math.round(noMelons) + " stolen melons"+" ("+MelongainPS+" per second, "+Math.round(Melongain)+" per click)");

    }
}
function meloncountfunction2() {
    if (noMelons < cattreatcost) {
        document.getElementById("cattreat").disabled = true;
    } else {
        document.getElementById("cattreat").disabled = false;
    }
    if (noMelons < fninjacost) {
        document.getElementById("fortniteninja").disabled = true;
    } else {
        document.getElementById("fortniteninja").disabled = false;
    }
    if (noMelons < sekirocost) {
        document.getElementById("sekiro").disabled = true;
    } else {
        document.getElementById("sekiro").disabled = false;
    }
    if (noMelons < bryncost) {
        document.getElementById("bryn").disabled = true;
    } else {
        document.getElementById("bryn").disabled = false;
    }
    if (noMelons < meloncost) {
        document.getElementById("melon").disabled = true;
    } else {
        document.getElementById("melon").disabled = false;
    }
    if (noMelons < startreatcost) {
        document.getElementById("startreat").disabled = true;
    } else {
        document.getElementById("startreat").disabled = false;
    }
    if (noMelons < odachicost) {
        document.getElementById("odachi").disabled = true;
    } else {
        document.getElementById("odachi").disabled = false;
    }


}

function boughtcattreat() {
    noMelons = noMelons - cattreatcost;
    cattreatsowned++;
    cattreatcost = (cattreatcost / 10) * 15 + 100 * (cattreatcost/90);
    cattreatcost = Math.round(cattreatcost);
    document.getElementById("cattreatcosthtml").innerHTML = "Cost: "+cattreatcost;
    Melongain = Melongain + catreatv;
    if(startreatowned){
        if(dservices){
            Melongain = (MelongainPS / 100) * (20 + cattreatsowned);
        }
        document.getElementById("devourerdesc").innerHTML = " He will reduce your melons per second to zero as payment, but his blessing will add "+(20+cattreatsowned)+"% of it to your melons per click.";
    }
    if (noMelons < cattreatcost) {
        document.getElementById("cattreat").disabled = true;
    } else {
        document.getElementById("cattreat").disabled = false;
    }
    
}

function boughtfninja() {
    noMelons = noMelons - fninjacost;
    fninjacost = (fninjacost / 10) * 15 + 100 * (fninjacost/90);
    fninjacost = Math.round(fninjacost);
    document.getElementById("fninjacosthtml").innerHTML = "Cost: "+fninjacost;
    MelongainPS = MelongainPS + fninjav;
    fninjaowned++;
    if(startreatowned){
        if(dservices){
            Melongain = (MelongainPS / 100) * (20 + cattreatsowned);
        }
    }else{
        if(dservices){
            Melongain = MelongainPS / 5;
        }
    }
    if (noMelons < fninjacost) {
        document.getElementById("fortniteninja").disabled = true;
    } else {
        document.getElementById("fortniteninja").disabled = false;
    }
}

function boughtsekiro() {
    noMelons = noMelons - sekirocost;
    sekirocost = (sekirocost / 10) * 15 + 100 * (sekirocost/90);
    sekirocost = Math.round(sekirocost);
    document.getElementById("sekirocosthtml").innerHTML = "Cost: "+sekirocost;
    MelongainPS = MelongainPS + sekirov;
    sekiroowned++;
    if(startreatowned){
        if(dservices){
            Melongain = (MelongainPS / 100) * (20 + cattreatsowned);
        }
    }else{
        if(dservices){
            Melongain = MelongainPS / 5;
        }
    }
    if (noMelons < sekirocost) {
        document.getElementById("sekiro").disabled = true;
    } else {
        document.getElementById("sekiro").disabled = false;
    }
}

function boughtbryn() {
    noMelons = noMelons - bryncost;
    bryncost = (bryncost / 10) * 15 + 100 * (bryncost/90);
    bryncost = Math.round(bryncost);
    document.getElementById("bryncosthtml").innerHTML = "Cost: "+bryncost;
    MelongainPS = MelongainPS + brynv;
    brynowned++;
    if(startreatowned){
        if(dservices){
            Melongain = (MelongainPS / 100) * (20 + cattreatsowned);
        }
    }else{
        if(dservices){
            Melongain = MelongainPS / 5;
        }
    }
    if (noMelons < bryncost) {
        document.getElementById("bryn").disabled = true;
    } else {
        document.getElementById("bryn").disabled = false;
    }
}

function boughtmelon() {
    noMelons = noMelons - meloncost;
    meloncost = 0;
    if(dservices){
        dservices = false;
        document.getElementById("melonhtml").innerHTML = "He waits, idle...";
        document.getElementById("meloncount").value = (" "+Math.round(noMelons) + " stolen melons"+" ("+MelongainPS+" per second, "+Math.round(Melongain)+" per click)");
        Melongain = 1 + cattreatsowned;
    }else{
        dservices = true;
        document.getElementById("meloncount").value = (" "+Math.round(noMelons) + " stolen melons"+" (0 per second, "+Math.round(Melongain)+" per click)");
        document.getElementById("melonhtml").innerHTML = "His services are active.";
        if(startreatowned){
            Melongain = (MelongainPS / 100) * (20 + cattreatsowned);
        }else{
            Melongain = MelongainPS / 5;
        }
    }
}

function boughtstar() {
    document.getElementById("startreat").disabled = true;
    startreatowned = true;
    document.getElementById("devourerdesc").innerHTML = " He will reduce your melons per second to zero as payment, but his blessing will add "+(20+cattreatsowned)+"% of it to your melons per click.";
    document.getElementById("cattreatdesc").innerHTML = " A tasty treat that will increase The Devourer's bonus co Melons per click by 1% each. Still increases melons per click by 1 as well.";
    document.getElementById("startreat").style.display = "none";
    if(dservices){
        Melongain = (MelongainPS / 100) * (20 + cattreatsowned);
    }
}

function boughtodachi(){
    document.getElementById("odachi").disabled = true;
    sekirov = 200;
    fninjav = 20;
    document.getElementById("odachi").style.display = "none";
    document.getElementById("sekirodesc").innerHTML = "A very good ninja. Japanese. Depressed. His name is Sekiro. Steals +200 melons every second.";
    document.getElementById("fninjadesc").innerHTML = "Not a very good ninja, despite being called ninja. Plays fortnite most of the time. Steals +20 melons every second.";
    MelongainPS = MelongainPS + (10 * fninjaowned)
    MelongainPS = MelongainPS + (100 * sekiroowned)
    if(dservices){
        Melongain = (MelongainPS / 100) * (20 + cattreatsowned);
    }
}

function click() {
    noMelons = noMelons + Melongain;
}

