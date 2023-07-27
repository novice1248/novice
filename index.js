function main() {
    let count = 0;
    let click_power = 1000000000;
    const buildingNumber = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    const building = [15, 100, 1100, 12000, 130000, 1400000, 200000000, 3300000000, 51000000000];
    const countDisplay = document.getElementById('count-display');
    const building1Button = document.getElementById('building-button1');
    const building2Button = document.getElementById('building-button2');
    const building3Button = document.getElementById('building-button3');
    const building4Button = document.getElementById('building-button4');
    const building5Button = document.getElementById('building-button5');
    const building6Button = document.getElementById('building-button6');
    const building7Button = document.getElementById('building-button7');
    const building8Button = document.getElementById('building-button8');
    const building9Button = document.getElementById('building-button9');
    const building1 = document.getElementById('building-1');
    const building2 = document.getElementById('building-2');
    const building3 = document.getElementById('building-3');
    const building4 = document.getElementById('building-4');
    const building5 = document.getElementById('building-5');
    const building6 = document.getElementById('building-6');
    const building7 = document.getElementById('building-7');
    const building8 = document.getElementById('building-8');
    const building9 = document.getElementById('building-9');
    const buildingCost1 = document.getElementById('building-cost1');
    const buildingCost2 = document.getElementById('building-cost2');
    const buildingCost3 = document.getElementById('building-cost3');
    const buildingCost4 = document.getElementById('building-cost4');
    const buildingCost5 = document.getElementById('building-cost5');
    const buildingCost6 = document.getElementById('building-cost6');
    const buildingCost7 = document.getElementById('building-cost7');
    const buildingCost8 = document.getElementById('building-cost8');
    const buildingCost9 = document.getElementById('building-cost9');

    const countUpButton = document.getElementById('count-up');
    countUpButton.addEventListener('click', function () {
        count += click_power;
        setInnerText(countDisplay, count);
    });

    building1Button.addEventListener('click', function () {
        if (count >= upgradeCost(buildingNumber[0], building[0])) {
            count -= upgradeCost(buildingNumber[0], building[0]);
            buildingNumber[0] += 1;
            setInnerText(building1, buildingNumber[0]);
            setInnerText(buildingCost1, upgradeCost(buildingNumber[0], building[0]));
            setInnerText(countDisplay, count);
        }
    });
    building2Button.addEventListener('click', function () {
        if (count >= upgradeCost(buildingNumber[1], building[1])) {
            count -= upgradeCost(buildingNumber[1], building[1]);
            buildingNumber[1] += 1;
            setInnerText(building2, buildingNumber[1]);
            setInnerText(buildingCost2, upgradeCost(buildingNumber[1], building[1]));
            setInnerText(countDisplay, count);
        }
    });
    building3Button.addEventListener('click', function () {
        if (count >= upgradeCost(buildingNumber[2], building[2])) {
            count -= upgradeCost(buildingNumber[2], building[2]);
            buildingNumber[2] += 1;
            setInnerText(building3, buildingNumber[2]);
            setInnerText(buildingCost3, upgradeCost(buildingNumber[2], building[2]));
            setInnerText(countDisplay, count);
        }
    });
    building4Button.addEventListener('click', function () {
        if (count >= upgradeCost(buildingNumber[3], building[3])) {
            count -= upgradeCost(buildingNumber[3], building[3]);
            buildingNumber[3] += 1;
            setInnerText(building4, buildingNumber[3]);
            setInnerText(buildingCost4, upgradeCost(buildingNumber[3], building[3]));
            setInnerText(countDisplay, count);
        }
    });
    building5Button.addEventListener('click', function () {
        if (count >= upgradeCost(buildingNumber[4], building[4])) {
            count -= upgradeCost(buildingNumber[4], building[4]);
            buildingNumber[4] += 1;
            setInnerText(building5, buildingNumber[4]);
            setInnerText(buildingCost5, upgradeCost(buildingNumber[4], building[4]));
            setInnerText(countDisplay, count);
        }
    });
    building6Button.addEventListener('click', function () {
        if (count >= upgradeCost(buildingNumber[5], building[5])) {
            count -= upgradeCost(buildingNumber[5], building[5]);
            buildingNumber[5] += 1;
            setInnerText(building6, buildingNumber[5]);
            setInnerText(buildingCost6, upgradeCost(buildingNumber[5], building[5]));
            setInnerText(countDisplay, count);
        }
    });
    building7Button.addEventListener('click', function () {
        if (count >= upgradeCost(buildingNumber[6], building[6])) {
            count -= upgradeCost(buildingNumber[6], building[6]);
            buildingNumber[6] += 1;
            setInnerText(building7, buildingNumber[6]);
            setInnerText(buildingCost7, upgradeCost(buildingNumber[6], building[6]));
            setInnerText(countDisplay, count);
        }
    });
    building8Button.addEventListener('click', function () {
        if (count >= upgradeCost(buildingNumber[7], building[7])) {
            count -= upgradeCost(buildingNumber[7], building[7]);
            buildingNumber[7] += 1;
            setInnerText(building8, buildingNumber[7]);
            setInnerText(buildingCost8, upgradeCost(buildingNumber[7], building[7]));
            setInnerText(countDisplay, count);
        }
    });
    building9Button.addEventListener('click', function () {
        if (count >= upgradeCost(buildingNumber[8], building[8])) {
            count -= upgradeCost(buildingNumber[8], building[8]);
            buildingNumber[8] += 1;
            setInnerText(building9, buildingNumber[8]);
            setInnerText(buildingCost9, upgradeCost(buildingNumber[8], building[8]));
            setInnerText(countDisplay, count);
        }
    });
    setInterval(() => {
        count += buildingNumber[0] * 0.1;
        count += buildingNumber[1] * 1.0;
        count += buildingNumber[2] * 8.0;
        count += buildingNumber[3] * 47.0;
        count += buildingNumber[4] * 260.0;
        count += buildingNumber[5] * 1400.0;
        count += buildingNumber[6] * 7800.0;
        count += buildingNumber[7] * 44000.0;
        count += buildingNumber[8] * 260000.0;
        setInnerText(countDisplay, count);
    }, 1000);
}


function upgradeCost(building, upgrade) {
    let upgradeCost;
    if (building > 0) {
        upgradeCost = 1.15 ** building * upgrade;
    } else {
        upgradeCost = upgrade;
    }
    return upgradeCost;
}

function setInnerText(htmlElement, num) {
    htmlElement.innerText = Math.trunc(num);
}



main();