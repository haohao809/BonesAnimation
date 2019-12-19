var Arm = Arm || {
      x: 0,
      y: 0,
      length: 100,
      angle: 0,
      centerAngle: 0,
      rotationRange: Math.PI / 4,
      parent: null,      
      create: function (length, centerAngle, rotationRange) {
          const obj = Object.create(this);
          obj.init(length,centerAngle,rotationRange);
          return obj
      },
      init: function (length,centerAngle,rotationRange) {
          this.centerAngle = centerAngle;
          this.rotationRange = rotationRange;
          this.length = length;
      },
      setPhase: function(phase) {
          this.angle = this.centerAngle + Math.sin(phase)* this.rotationRange;
      },
      getEndX: function() {
          let angle = this.angle;
          let parent = this.parent;
          while(parent) {
              angle += parent.angle;
              parent = parent.parent;
          }
          return this.x + Math.cos(angle) * this.length;
      },
      getEndY: function() {
          let angle = this.angle;
          let parent = this.parent;
          while(parent) {
              angle += parent.angle;
              parent = parent.parent;
          }
          return this.y + Math.sin(angle) * this.length;
      },
      render: function(context) {
          context.strokeStyle = "#000000";
          context.lineWidth = 5;
          context.beginPath();
          context.moveTo(this.x, this.y);
          context.lineTo(this.getEndX(),this.getEndY());
          context.stroke();                  
        
      }
}