Web Rebels 2015 talk

Introduction
  + NYC
  + Kickstarter
  + meow shoes
  + PURR bracelet

Where is this talk going
  + go one level deeper
  + what’s going on underneath
  + show spectrum and place upon it

Arduino
  + Explain pins
  + Explain gates of atMega
  + ~~LED PWM - tricking the eye just like at the movies~~

Firmata
  + What is firmware?
  + void loop() { Firmata.processInput(); }
  + FirmataClass::processInput(void)
  + FirmataClass::processSysexMessage(void)

Javascript
  + Node Serialport
  + Firmata - sends a sequence of bytes as a node buffer
  + curating the correct bytes to come out the other end
  + manipulate bytes, write to C bindings which takes your abstraction
  + makes it safely through, Firmata helps deliver it on the other end
  

what does firmatajs send over serial port for led on?

```javascript
// on
serialPort.write(new Buffer([237,  127,  1]))

// off
serialPort.write(new Buffer([237,  0,  0]))
```

Ideas
+ sailboat metaphor for spectrum
  + high level - boat
  + mid level - scuba diving, interacting with the fish
  + low level - deep sea diving, living with the mermaids 

+ kittens behind a desk
  + 8 outlets behind them
  + PORT, PIN and DDR, 3 registers of each to allow for 14 pins on an UNO @ 3 bits each pin
  + switchboard croc looks up correct bits and calls the kittens to set the right outlets

Storyboard
1. Pin lines from circuit 
2. Arduino with roof on the atMega
3. ddr office
4. port office

todo:
+ colour cats differently
+ draw firmata croc
+ do firmata slides
+ do conclusion slides

colour lovers theme
http://www.colourlovers.com/palette/3755355/Potentially_Potent

♥︎