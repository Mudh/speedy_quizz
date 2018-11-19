<?php declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20181118191018 extends AbstractMigration
{
    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE coeff ADD step_id INT DEFAULT NULL, ADD level_id INT DEFAULT NULL, ADD alias VARCHAR(150) NOT NULL');
        $this->addSql('ALTER TABLE coeff ADD CONSTRAINT FK_A29F1C5273B21E9C FOREIGN KEY (step_id) REFERENCES step (id)');
        $this->addSql('ALTER TABLE coeff ADD CONSTRAINT FK_A29F1C525FB14BA7 FOREIGN KEY (level_id) REFERENCES level (id)');
        $this->addSql('CREATE INDEX IDX_A29F1C5273B21E9C ON coeff (step_id)');
        $this->addSql('CREATE INDEX IDX_A29F1C525FB14BA7 ON coeff (level_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE coeff DROP FOREIGN KEY FK_A29F1C5273B21E9C');
        $this->addSql('ALTER TABLE coeff DROP FOREIGN KEY FK_A29F1C525FB14BA7');
        $this->addSql('DROP INDEX IDX_A29F1C5273B21E9C ON coeff');
        $this->addSql('DROP INDEX IDX_A29F1C525FB14BA7 ON coeff');
        $this->addSql('ALTER TABLE coeff DROP step_id, DROP level_id, DROP alias');
    }
}
