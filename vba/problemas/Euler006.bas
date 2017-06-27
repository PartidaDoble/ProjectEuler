Attribute VB_Name = "euler006"
Option Explicit

' La suma de los cuadrados de los diez primeros números naturales es,
' 1^2 + 2^2 + ... + 10^2 = 385
' El cuadrado de la suma de los diez primeros números naturales es,
' (1 + 2 + ... + 10)^2 = 55^2 = 3025
' Por lo tanto, la diferencia entre la suma de los cuadrados de los diez primeros
' números naturales y el cuadrado de la suma es 3025 - 385 = 2640.
' Encuentra la diferencia entre la suma de los cuadrados de los
' primeros cien números naturales y el cuadrado de la suma

Sub Main()
    Debug.Print "Solución: " & DifCuadrados(100)
End Sub

Function DifCuadrados(NumNatural As Integer) As Long

    Dim i As Integer
    Dim j As Integer
    Dim Resultado As Long
    
    For i = 1 To NumNatural
        For j = i + 1 To NumNatural
            Resultado = Resultado + i * j
        Next j
    Next i
    
    DifCuadrados = 2 * Resultado

End Function
