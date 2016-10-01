function (context, args) { // test_script1 {}
	
	var l = #s.scripts.lib();
	
	var caller = context.caller;
	var bal = #s.accts.balance();
	var msg = "+Hello+ ! `5My` `2balance` !is! : " + bal;
	var rand_i = l.rand_int(9, 99);
	
	#s.chats.send({channel:"0000", msg:msg})
	
	return {
		ok: true,
		current_bal: bal,
		username: caller,
		msg: msg,
		rand_int: rand_i
	};
	
}
