function chkValidationNew()
	{
	   	// see http://www.thesitewizard.com/archive/framebreak.shtml
	  	// for an explanation of this script and how to use it on your
	  	// own website
	  	var dt1= new Date($J("#arr_datepicker").val());
		var dt2= new Date($J("#dep_datepicker").val());
		if($J("#arr_datepicker").val()=="" || $J("#dep_datepicker").val()=="")
		{
			alert("Please select arrival and departure dates");
			return false;
		}
		else if((dt1.getTime() > dt2.getTime())|| dt1.getTime()==dt2.getTime())
		{
			alert("Departure date should be greater than arrival date");
			return false;
		}
			
		var adult=document.getElementById("adult_1").value;
		var room=document.getElementById("num_Rooms").value;
		
		//alert(adult+"adult--"+room+"room--"+child+"child");
		dt1=$J.datepicker.formatDate('ddmmyy', dt1);
		dt2=$J.datepicker.formatDate('ddmmyy', dt2);
		var code=$('#regCode').val();
		var curr=$('#curr').val();
		var template=$('#template').val();
		//alert(code +curr);
		//alert("http://www.resavenue.com/bookingNew/servlet/checkAvailable.resBookings?regCode="+code+"&arr_date="+dt1+"&dep_date="+dt2+"&adult_1="+adult+"&child_1="+child+"&roomNo="+room+"&curr="+curr+"&showPkg=Y&resident=Y&targetTemplate="+template+"&discountCode="+discountCode);
	    //top.location.href = "http://www.resavenue.com/bookingNew/servlet/checkAvailable.resBookings?regCode="+code+"&arr_date="+dt1+"&dep_date="+dt2+"&adult_1="+adult+"&child_1="+child+"&roomNo="+room+"&curr="+curr+"&showPkg=Y&resident=Y&targetTemplate=3";
	    //top.location.href = "http://www.resavenue.com/bookingNew/servlet/checkAvailable.resBookings?regCode="+code+"&arr_date="+dt1+"&dep_date="+dt2+"&adult_1="+adult+"&child_1="+child+"&roomNo="+room+"&curr="+curr+"&showPkg=Y&resident=Y&targetTemplate="+template+"&discountCode="+discountCode;
	    window.open("https://www.resavenue.com/bookingNew/servlet/checkAvailable.resBookings?regCode="+code+"&arr_date="+dt1+"&dep_date="+dt2+"&adult_1="+adult+"&roomNo="+room+"&curr="+curr+"&showPkg=Y&resident=Y&targetTemplate="+template,'_blank');
	}
	
