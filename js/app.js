
/*************** MODEL ***************/
var model = {
	
	/* STUDENTS IGNORE THIS FUNCTION
 * All this does is create an initial
 * attendance record if one is not found
 * within localStorage.
 */
	init : function() {
		if (!localStorage.attendance) {
        console.log('Creating attendance records...');
        function getRandom() {
            return (Math.random() >= 0.5);
        }

        var nameColumns = $('tbody .name-col'),
            attendance = {};

        nameColumns.each(function() {
            var name = this.innerText;
            attendance[name] = [];

            for (var i = 0; i <= 11; i++) {
                attendance[name].push(getRandom());
            }
        });

        localStorage.attendance = JSON.stringify(attendance);
    }
	},
    
    getCurrentAttendance : function() {
        return JSON.parse(localStorage.attendance);
    },
    
    incrementMissing : function(nameOfStudent) {
        attendance[]
    }
	
	
}

/*************** OCTOPUS ***************/
var octopus = {
	init : function() {
		model.init();
        view.init();
	},
	
	getCurrentAttendance : function() {
		return model.getCurrentAttendance();
	},
    
    countMissing : function() {
        view.$allMissed.each(function() {
            var studentRow = $(this).parent('tr'),
                dayChecks = $(studentRow).children('td').children('input'),
                numMissed = 0;

            dayChecks.each(function() {
                if (!$(this).prop('checked')) {
                    numMissed++;
                }
            });

            $(this).text(numMissed);
        });
    },
    
    checkBoxes : function() {
        console.log('checkBoxes');
        view.render();
    },
    
    incrementMissing : function(nameOfStudent) {
        console.log("incrementMissing");
        model.incrementMissing(nameOfStudent);
        view.render();
    }
 }

/*************** VIEW ***************/
var view = {
	init : function() {
        var attendance = octopus.getCurrentAttendance();
        $allMissed = $('tbody .missed-col'),
        $allCheckboxes = $('tbody input');
        
        var studentName = $('.name-col').text();
        
        // add a click handler to each checkbox , so that it calls the incrementMissing()
        // implementation
	},
	
	render : function() {
        
    // full check boxes, based on attendace records
    $.each(attendance, function(name, days) {
        var studentRow = $('tbody .name-col:contains("' + name + '")').parent('tr'),
            dayChecks = $(studentRow).children('.attend-col').children('input');

        dayChecks.each(function(i) {
            $(this).prop('checked', days[i]);
        });
    });
	},
    
    // render according to the row / student selected
    partialRender : function() {
        
    }
}

/*   LEFT TO REFACTOR
$(function() {
    
    
    // When a checkbox is clicked, update localStorage
    $allCheckboxes.on('click', function() {
        var studentRows = $('tbody .student'),
            newAttendance = {};

        studentRows.each(function() {
            var name = $(this).children('.name-col').text(),
                $allCheckboxes = $(this).children('td').children('input');

            newAttendance[name] = [];

            $allCheckboxes.each(function() {
                newAttendance[name].push($(this).prop('checked'));
            });
        });

        countMissing();
        localStorage.attendance = JSON.stringify(newAttendance);
    });

    countMissing();
}());
*/


octopus.init();
