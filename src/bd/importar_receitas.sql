

SET IDENTITY_INSERT Receitas ON;

INSERT INTO Receitas (idReceita,
             idUsuario,
             tituloReceita,
             tipo,
             ingredientes,
             modoPreparo,
             nota)
  SELECT idReceita, idUsuario, tituloReceita, tipo, ingredientes, modoPreparo, nota
  FROM receiitas;

SET IDENTITY_INSERT Receitas OFF;
