
	npcScript[ 218 ] = function( npcObject )
	{
		npcObject.events._add( "show", function()
		{
			new spellEffects.junglecreaturesambient2min({
													targetCharacter: npcObject
												});
		});
	}