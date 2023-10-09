// Setting
const settings = {
    "apiUrl": "https://iaea.starlight.cool/api/alps/data",
    "dataPointDescriptions": [{
        "title": "I - ALPS处理水输送线辐射监测站",
        "body": "\u003Cp\u003E该指标代表放置在输送泵上的辐射探测器监测到的γ-射线辐射水平。\u003C\/p\u003E\n\u003Cp\u003E\u003Cem\u003ECPS (Counts per second，中文含义：每秒计数)\u003C\/em\u003E 是显示从给定源或位置发射的辐射强度的测量单位。其代表着每秒检测到的放射线数量，其仅能代表射线个数的多少，无法直接反映射线的能量大小。\u003C\/p\u003E"
    }, {
        "title": "II - ALPS处理水输送管线流量监测站",
        "body": "\u003Cp\u003E该指标代表此时流经管道的ALPS处理水的流量（单位：m³/h），该数值的大小基于泵的状态和容量，该部分排出的水将在下游被进一步稀释。\u003C\/p\u003E\n"
    }, {
        "title": "III - 海水泵入口辐射监测站",
        "body": "\u003Cp\u003E该指标代表放置在海水进水泵处的辐射探测器监测到的γ-射线辐射水平。\u003C\/p\u003E\n\u003Cp\u003E\u003Cem\u003ECPS (Counts per second，中文含义：每秒计数)\u003C\/em\u003E 是显示从给定源或位置发射的辐射强度的测量单位。其代表着每秒检测到的放射线数量，其仅能代表射线个数的多少，无法直接反映射线的能量大小。\u003C\/p\u003E"
    }, {
        "title": "IV - 海水转运泵流量监测站",
        "body": "\u003Cp\u003E\n该指标代表从周围地区泵入稀释设施并用于稀释处理水的海水流量（单位：m³/h）。在正常运行期间，通常仅启用两台泵来达到所需的流速。 \u003C\/p\u003E"
    }, {
        "title": "V - 稀释后水氚含量监测站",
        "body": "\u003Cp\u003E日本的计划是将排放水中的氚浓度限制在1500 Bq/l以下。该浓度远低于日本规定的排放浓度限值60000 Bq/l和世界卫生组织（世界卫生组织）饮用水质量指南10000 Bq/l。\u003C\/p\u003E\n\u003C\p\u003E然而需要注意的是，中国饮用水氚含量标准规定的氚上限值为100bp/L，与法国规定的上限值是一致的。依照该标准来看，日本排放的核污水氚含量是严重超标的。\u003C\/p\u003E\n\u003Cp\u003E\u003Cimg alt=\u0022Japan regulatory standards\u0022 src=\u0022https:\/\/www.iaea.org\/sites\/default\/files\/23\/08\/japan-regulatory-standards.jpg\u0022\u003E\u003C\/p\u003E\u003Cp\u003E东电公司每天对稀释的ALPS处理过的水进行取样和分析检验，这里的数据将与东电公司公布的数据保持同步。\u003C\/p\u003E\n\u003Cp\u003E\u003Cem\u003E贝克勒尔（Bq）是放射性活度的国际单位，含义为每秒钟发生衰变的原子数。\u003C\/em\u003E\u003C\/p\u003E"
    }, {
        "title": "VI - 排污竖井辐射监测站",
        "body": "\u003Cp\u003E该指标代表放置在竖井处的辐射探测器监测到的γ-射线辐射水平\u003C\/p\u003E\n\u003Cp\u003E\u003Cem\u003ECPS (Counts per second，中文含义：每秒计数)\u003C\/em\u003E 是显示从给定源或位置发射的辐射强度的测量单位。其代表着每秒检测到的放射线数量，其仅能代表射线个数的多少，无法直接反映射线的能量大小。\u003C\/em\u003E\u003C\/p\u003E"
    }],
    "processDescriptions": [{
        "title": "ALPS处理水储存罐",
        "body": "\u003Cp\u003EALPS处理后的水将从现场储罐输送至该储存罐。这里的水已经通过ALPS工艺处理过至少一次。\u003C\/p\u003E\n"
    }, {
        "title": "二级处理设施",
        "body": "\u003Cp\u003E如果需要，水会在此处通过ALPS工艺再次净化，使水中的放射性核素含量低于监管标准规定的限值，但其中氚除外，根据东电公司的说法，氚无法被ALPS工艺清除，只能依靠稀释才能低于日本政府的标准。\u003C\/p\u003E\n"
    }, {
        "title": "污水直通管",
        "body": "\u003Cp\u003E如果水的第一次ALPS处理导致放射性物质（氚除外）浓度达到排放监管标准，则水不需要再次通过ALPS过程。\u003C\/p\u003E\n"
    }, {
        "title": "测量与确认设施",
        "body": "\u003Cp\u003E在排放之前，将由该装置对处理过的水进行收集、均化（即充分混合），并再次分析多种不同的放射性核素，如果符合日本政府提出的监管标准，则准备进入后续设施排放。\u003C\/p\u003E\n"
    }, {
        "title": "应急隔离阀",
        "body": "\u003Cp\u003E在排放系统出现任何意外情况的情况下，如辐射探测器报告异常水平，稀释处理水的海水泵将通过该装置关闭。东京电力公司在两个单独的位置安装了紧急隔离阀，可以在几秒钟内关闭以停止排放。不同类型的阀门安装在两个不同的位置，以确保冗余。\u003C\/p\u003E\n"
    }, {
        "title": "海水泵入口",
        "body": "\u003Cp\u003E周围的海水将从这里被泵入，用于后续的稀释工作\u003C\/p\u003E\n"
    }, {
        "title": "海水混合管道",
        "body": "\u003Cp\u003E在这些管道中，海水将被加入到ALPS处理过的污水中，并进行完全混合，以完成稀释工作。\u003C\/p\u003E\n"
    }, {
        "title": "排污竖井",
        "body": "\u003Cp\u003E根据东电公司目前的计划，水在排放前暂时滞留在该区域，以确认海水和ALPS处理过的水已经充分混合，同时氚已经进行了充分的稀释。\u003C\/p\u003E\n"
    }, {
        "title": "排污管道",
        "body": "\u003Cp\u003E稀释后的水将通过这条1公里长的隧道排放到一个自福岛第一核电站建设以来一直限制商业捕鱼的区域内。\u003C\/p\u003E\n"
    }]
}

// Feature flags
const features = {
    rangeValidation: true,
    ageValidation: false,
};

// API poll interval
const apiPollInterval = 5 * 60 * 1000; // 5 minutes

// Maximum allowed measurement age
const maxEntryAge = 60 * 60 * 1000; // 60 minutes

// Mapping the data point callouts to descriptions
const dataPointIds = {
    data_point_1: 0,
    data_point_2: 1,
    data_point_3: 2,
    data_point_4: 3,
    data_point_5: 4,
    data_point_6: 5,
};

// Mapping the clickable dots to descriptions
const dotElementIds = {
    dot_alps_treated_water: 0,
    dot_secondary_treatment_facility: 1,
    dot_secondary_treatment_direct_connection: 2,
    dot_measurement_facility: 3,
    dot_emergency_isolation_valve: 4,
    dot_seawater_transfer_pump: 5,
    dot_seewater_pipe: 6,
    dot_discharge_vertical_shaft: 7,
    dot_discharge_tunnel: 8,
};

// Allowed value ranges for data points
const dataValueRanges = {
    // Data point I
    fg: {
        min: 0,
        max: 60,
    },
    // Data points III and VI
    sw: {
        min: 0,
        max: 30,
    },
    // Data point V
    fd: {
        min: 0,
        max: 60000,
    },
};

// Semaphore color values
const indicatorStatusColors = {
    red: '#de0b17',
    green: '#70fa4b',
    gray: '#959595',
    white: '#ffffff',
};

/**
 * Checks if the user's device is a smartphone
 * @returns `true` if the device has a touch screen and the screen is narrower than 768px
 */
function isMobile() {
    let hasTouchScreen = false;
    if ('maxTouchPoints' in navigator) {
        hasTouchScreen = navigator.maxTouchPoints > 0;
    }
    const hasSmallScreen = window.matchMedia(
        'screen and (max-width: 767px'
    ).matches;
    return hasTouchScreen && hasSmallScreen;
}

/**
 * Checks if a data point contains the required number of entries.
 *
 * @param {Object} dataPoint Data point to validate
 * @param {Number} expectedEntryCount Expected number of entries
 * @returns `true` if the data point has the required number of entries
 */
function dataPointOK(dataPoint, expectedEntryCount) {
    return (
        dataPoint &&
        dataPoint.entries &&
        dataPoint.entries.length === expectedEntryCount
    );
}

/**
 * Finds the maximum measured value.
 *
 * @param {Array} entries List of entries to search
 * @returns The largest measured value among all entries
 */
function max(entries) {
    return {
        type: 'alps_measurement_value',
        value: Math.max(
            ...entries
                .filter((entry) => entry.type === 'alps_measurement_value')
                .map((entry) => entry.value)
        ),
    };
}

/**
 * Adds all measurement values together.
 *
 * @param {Array} entries List of entries to add up
 * @returns A sum of all entries
 */
function sum(entries) {
    return {
        type: 'alps_measurement_value',
        value: entries
            .filter((entry) => entry.type === 'alps_measurement_value')
            .reduce((total, entry) => total + entry.value, 0),
    };
}

/**
 * Returns a Boolean status for a given status description.
 *
 * @param {Object} entry One or more feed entries describing the equipment status
 * @returns `true` if the status is 'In operation'.
 * If `entry` is an array, it returns true of any of its elements are 'In operation'
 */
function isActive(entry) {
    const values = Array.isArray(entry) ? entry : Array(entry);
    return values.some(
        (entry) =>
            entry === null ||
            (entry.type === 'alps_equipment_status' &&
                entry.status === 'In operation')
    );
}

/**
 * Checks if an entry has a non-null value.
 *
 * @param {Object} entry One or more feed entries containing measurement values
 * @returns `true` if an entry is an ALPS measurement and it contains a non-null value.
 *    If `entry` is an array, it returns true if any of the elements satisfy the condition.
 */
function hasValue(entry) {
    const values = Array.isArray(entry) ? entry : Array(entry);
    return values.some(
        (entry) =>
            entry && entry.type === 'alps_measurement_value' && entry.value !== null
    );
}

/**
 * Checks if an entry has a non-zero value.
 *
 * @param {Object} entry One or more feed entries containing measurement values
 * @returns `true` if an entry is an ALPS measurement and it contains a non-zero value.
 *    If `entry` is an array, it returns true if any of the elements satisfy the condition.
 */
function hasNonZeroValue(entry) {
    const values = Array.isArray(entry) ? entry : Array(entry);
    return values.some(
        (entry) =>
            entry &&
            entry.type === 'alps_measurement_value' &&
            entry.value !== null &&
            entry.value !== 0
    );
}

function isCurrent(entry) {
    const values = Array.isArray(entry) ? entry : Array(entry);
    return values.some((entry) => {
        if (entry && entry.type === 'alps_measurement_value') {
            const currentTime = new Date();
            const entryTime = new Date(entry.time);
            const entryAge = currentTime - entryTime;
            return entryAge < maxEntryAge;
        } else {
            return false;
        }
    });
}

/**
 * Checks if an entry is within a range.
 *
 * @param {Object} entry One or more feed entries containing measurement values
 * @param {Object} range range of allowed values
 * @returns `true` if an entry is an ALPS measurement and is within the given range.
 *    If `entry` is an array, it returns true if any of the elements satisfy the condition.
 */
function isWithinRange(entry, range) {
    const values = Array.isArray(entry) ? entry : Array(entry);
    return values.some(
        (entry) =>
            entry &&
            entry.type === 'alps_measurement_value' &&
            (entry.value === null ||
                (entry.value >= range.min && entry.value <= range.max))
    );
}

/**
 * Returns a hex color for a given equipments status, to be used on the equipment label.
 *
 * @param {Object} entry One or more feed entries with values, or describing the equipment status
 * @param {boolean} [treatZeroAsNull=false] a flag indicating whether zero values should be treated is empty/null values
 * @returns A hex color
 */
function labelStatusColor(entry, treatZeroAsNull = false) {
    return isActive(entry) ||
    (treatZeroAsNull && hasNonZeroValue(entry)) ||
    (!treatZeroAsNull && hasValue(entry))
        ? '#484446'
        : '#959595';
    //
}

/**
 * Returns a hex color for a given equipments status, to be used on the equipment indicator dot.
 *
 * @param {Object} entry One or more feed entries with values, or describing the equipment status
 * @param {boolean} [treatZeroAsNull=false] a flag indicating whether zero values should be treated is empty/null values
 * @param {Object} [allowedRange=null] optional range of allowed values
 * @returns A hex color
 */
function indicatorStatusColor(
    entry,
    treatZeroAsNull = false,
    allowedRange = null
) {
    if (features.ageValidation) {
        if (!isCurrent(entry)) {
            return indicatorStatusColors.white;
        }
    }
    if (features.rangeValidation && allowedRange) {
        if (!isWithinRange(entry, allowedRange)) {
            return indicatorStatusColors.red;
        }
    }
    return isActive(entry) ||
    (treatZeroAsNull && hasNonZeroValue(entry)) ||
    (!treatZeroAsNull && hasValue(entry))
        ? indicatorStatusColors.green
        : indicatorStatusColors.gray;
}

/**
 * Formats an entry value.
 *
 * @param {Object|Number} valueEntry a feed entry containing a measurement value
 * @param {boolean} [treatZeroAsNull=false] a flag indicating whether zero values should be treated is empty/null values
 * @param {Object} statusEntry a coresponding feed entry indicating the measurement device status
 * @returns '-' if the value is null, or if the value is 0 and `treatZeroAsNull` is true, or
 *    if the `statusEntry` indicates an inactive state,
 *    otherwise the underlying numeric value.
 */
function formatValue(
    valueEntry,
    treatZeroAsNull = false,
    statusEntry = null
) {
    return valueEntry.value === null ||
    (valueEntry.value === 0 && treatZeroAsNull) ||
    !isActive(statusEntry)
        ? '-'
        : valueEntry.value;
}

/**
 * Sets the text of a given element, making sure it remains properly aligned.
 * It assumes that each text element contains a corresponding tspan child element
 * and repositions the text element using the translate transformation as needed.
 *
 * @param {string} selector
 * @param {Document} context
 * @param {string} value
 * @param {string} [align='center']
 */
function setText(selector, context, value, align = 'center') {
    const text = $(selector, context)[0];
    const tspan = $(selector + ' tspan', context)[0];

    if (text) {
        const originalRect = text.getBBox();
        // Check if the graphic design tool has positioned the element
        // using the SVG translate transform
        const transforms = text.transform.baseVal;
        let translate = null;
        for (let index = 0; index < transforms.length; index++) {
            const transform = transforms[index];
            if (transform.type === SVGTransform.SVG_TRANSFORM_TRANSLATE) {
                translate = transform;
            }
        }
        tspan.textContent = value;
        if (translate) {
            // Correct the horizontal offset
            const newRect = text.getBBox();
            let offsetX = 0;
            switch (align) {
                case 'left':
                    break;
                case 'center':
                    offsetX = (newRect.width - originalRect.width) / 2;
                    break;
                case 'right':
                    offsetX = newRect.width - originalRect.width;
            }
            translate.setTranslate(
                translate.matrix.e - offsetX,
                translate.matrix.f
            );
        }
    }
}

/**
 * Shows the modal dialog with the given title and body.
 *
 * @param {String} title
 * @param {String} body
 */
function showModalDescription(title, body) {
    $('#alps-modal-description-title').text(title);
    $('#alps-modal-description-body').html(body);

    new bootstrap.Modal('#alps-modal-description', {}).show();
}

/**
 * Makes a list of elements clickable and shows the corresponding description
 * in a modal dialog when an element is clicked.
 *
 * @param {Document} context SVG image document
 * @param {Array} elementIds List of IDs of SVG elements to turn into click targets
 * @param {Array} descriptions List of descriptions to show in the modal dialog
 */
function loadDescriptions(context, elementIds, descriptions) {
    for (const id in elementIds) {
        if (elementIds.hasOwnProperty(id)) {
            const index = elementIds[id];
            if (descriptions[index]) {
                $(`#${id}`, context)
                    .css("cursor", "pointer")
                    .on('click', function () {
                        showModalDescription(
                            descriptions[index].title,
                            descriptions[index].body
                        );
                    });
            }
        }
    }
}

/**
 * Loads the ALPS real time measurement data and binds it to the callouts.
 *
 * @param {Document} context SVG image document
 */
function loadData(context, url) {
    $.getJSON(url, function (dataPoints) {
        // Data Point I
        if (dataPointOK(dataPoints.fg, 2)) {
            const { entries } = dataPoints.fg;
            setText(
                '#data_point_1_value',
                context,
                formatValue(max(entries), true)
            );
            $('#data_point_1_status', context).css({
                fill: indicatorStatusColor(max(entries), true, dataValueRanges.fg),
            });
        }

        // Data Point II
        if (dataPointOK(dataPoints.fr, 8)) {
            const { entries } = dataPoints.fr;
            setText(
                '#data_point_2_value',
                context,
                formatValue(max(entries.slice(0, 4)), false, entries.slice(6))
            );
            $('#data_point_2_status', context).css({
                fill: indicatorStatusColor(entries.slice(6)),
            });
        }

        // Data Point III and VI
        if (dataPointOK(dataPoints.sw, 3)) {
            const { entries } = dataPoints.sw;
            $('#data_point_3_status', context).css({
                fill: indicatorStatusColor(entries[0], true, dataValueRanges.sw),
            });
            setText('#data_point_3_value', context, formatValue(entries[0], true));
            $('#data_point_6_status', context).css({
                fill: indicatorStatusColor(entries[1], true, dataValueRanges.sw),
            });
            setText('#data_point_6_value', context, formatValue(entries[1], true));
        }
        // Data Point IV
        if (dataPointOK(dataPoints.fs, 6)) {
            const { entries } = dataPoints.fs;
            setText(
                '#data_point_4_value',
                context,
                formatValue(sum(entries), false, entries.slice(3))
            );
            $('#data_point_4_status', context).css({
                fill: indicatorStatusColor(entries.slice(3)),
            });
            $('#Pump_A_status', context).css({
                fill: indicatorStatusColor(entries[3]),
            });
            setText(
                '#Pump_A_value',
                context,
                formatValue(entries[0], false, entries[3]),
                'left'
            );
            $('#Pump_A_value', context).css({ fill: labelStatusColor(entries[3]) });
            $('#Pump_A_unit', context).css({ fill: labelStatusColor(entries[3]) });
            $('#Pump_B_status', context).css({
                fill: indicatorStatusColor(entries[4]),
            });
            setText(
                '#Pump_B_value',
                context,
                formatValue(entries[1], false, entries[4]),
                'left'
            );
            $('#Pump_B_value', context).css({ fill: labelStatusColor(entries[4]) });
            $('#Pump_B_unit', context).css({ fill: labelStatusColor(entries[4]) });
            $('#Pump_C_status', context).css({
                fill: indicatorStatusColor(entries[5]),
            });
            setText(
                '#Pump_C_value',
                context,
                formatValue(entries[2], false, entries[5]),
                'left'
            );
            $('#Pump_C_value', context).css({ fill: labelStatusColor(entries[5]) });
            $('#Pump_C_unit', context).css({ fill: labelStatusColor(entries[5]) });
        }
        // Data Point V
        if (dataPointOK(dataPoints.fd, 3)) {
            const { entries } = dataPoints.fd;
            $('#data_point_5_status', context).css({
                fill: indicatorStatusColor(entries[0], true, dataValueRanges.fd),
            });
            setText('#data_point_5_value', context, formatValue(entries[0], true));
        }
        // Data loaded successfully, keep polling for new data
        setTimeout(loadData, apiPollInterval, context, url);
    });
}

/**
 * Initializes the visualization by loading the SVG image,
 * measurement data and element descriptions.
 */
function loadVisualization() {
    const context = $('#alps-visualization').contentDocument;
    // Load data point and process descriptions
    loadDescriptions(context, dataPointIds, settings.dataPointDescriptions);
    loadDescriptions(context, dotElementIds, settings.processDescriptions);
    // Load the data
    loadData(context, settings.apiUrl);
}
