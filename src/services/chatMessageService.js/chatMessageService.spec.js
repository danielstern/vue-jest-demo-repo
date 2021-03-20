import { ChatMessageService } from './';
describe("the message service", () =>{

    let chatMessageService;

    beforeEach(()=>{
        
        chatMessageService = ChatMessageService([]);

    });

    it("should add messages", async ()=>{

        const content = "Thank you for using Vue!";
        expect(await chatMessageService.getMessages()).toHaveLength(0);

        await chatMessageService.submitMessage({content});

        expect(await chatMessageService.getMessages()).toHaveLength(1);

        let messages = await chatMessageService.getMessages();
        expect(messages[0].content).toEqual(content);

    })
})