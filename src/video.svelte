<script></script>

<style>                

    #remotes {                     
    visibility: hidden;          
    }                              

    .videoContainer {              
    object-fit: cover;           
    margin: 0 auto;              
    padding: 0;                  
    }                              

    .videoContainer video {        
    width: 100%;                 
    height: 100%;                
    border-radius: 10px;         
    border: 5px double #f2f2f2;  
    }                              

    .volume {                      
    position: absolute;          
    left: 15%;                   
    width: 70%;                  
    bottom: 20px;                
    height: 10px;                
    display: none;               
    }                              

    .video-stack {                    
         
    } 

</style>

<div id="remotes" class="row">
<div class="video-stack">
    <div class="videoContainer">
    <video id="selfVideo"></video>
    <meter id="localVolume" class="volume"></meter>
    </div>
</div>
</div>