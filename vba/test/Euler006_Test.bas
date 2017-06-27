Attribute VB_Name = "Euler006_Test"
Option Explicit

Sub Test_Euler006()
    On Error Resume Next

    Dim Specs As New SpecSuite
    
    With Specs.It("Dos dígitos (1 + 2)^2 - (1^2 + 2^2) = 4")
        .Expect(DifCuadrados(2)).ToEqual 4
    End With
    
    With Specs.It("Tres dígitos (1 + 2 + 3)^2 - (1^2 + 2^2 + 3^2) = 22")
        .Expect(DifCuadrados(3)).ToEqual 22
    End With
    
    With Specs.It("Diez dígitos (1 + 2 + ... + 10)^2 - (1^2 + 2^2 + ... + 10^2) = 2640")
        .Expect(DifCuadrados(10)).ToEqual 2640
    End With
    
    InlineRunner.RunSuite Specs
End Sub
