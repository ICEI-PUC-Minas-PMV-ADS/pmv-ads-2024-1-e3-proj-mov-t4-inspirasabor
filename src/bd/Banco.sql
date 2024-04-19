CREATE TABLE [dbo].[Usuarios] (
    [idUsuario] INT           IDENTITY (1, 1) NOT NULL,
    [nome]      NVARCHAR (100) NOT NULL,
    [email]     NVARCHAR (100) NOT NULL,
    [senha]     NVARCHAR (50) NOT NULL,
    CONSTRAINT [PK_Usuarios] PRIMARY KEY CLUSTERED ([idUsuario] ASC)
);


--------------------------------------------------------------------
CREATE TABLE [dbo].[Receitas] (
    [idReceita]     INT            IDENTITY (1, 1) NOT NULL,
    [idUsuario]     INT            NOT NULL,
    [tituloReceita] NVARCHAR (50)  NOT NULL,
    [tipo]          CHAR (10)      NOT NULL,
    [ingredientes]  NVARCHAR (MAX) NULL,
    [modoPreparo]   NVARCHAR (MAX) NULL,
    [nota]          FLOAT (53)     NULL,
    CONSTRAINT [PK_Receitas] PRIMARY KEY CLUSTERED ([idReceita] ASC),
    CONSTRAINT [FK_Receitas_Usuarios] FOREIGN KEY ([idUsuario]) REFERENCES [dbo].[Usuarios] ([idUsuario])
);

---------------------------------------------------------------------

CREATE TABLE [dbo].[Comentarios] (
    [idReceitaComentario] INT            NOT NULL,
    [idUsuarioComentario] INT            NOT NULL,
    [comentario]          NVARCHAR (MAX) NOT NULL,
    [idComentario]        INT            IDENTITY (1, 1) NOT NULL,
    CONSTRAINT [PK_Comentarios] PRIMARY KEY CLUSTERED ([idComentario] ASC),
    CONSTRAINT [FK_Comentarios_Receita] FOREIGN KEY ([idReceitaComentario]) REFERENCES [dbo].[Receitas] ([idReceita]),
    CONSTRAINT [FK_Comentarios_Usuarios] FOREIGN KEY ([idUsuarioComentario]) REFERENCES [dbo].[Usuarios] ([idUsuario])
);